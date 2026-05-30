import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { validationResult } from "express-validator";

import User from "../models/mongoose/schemas/User.js";

const generateAccessToken = (user) => {

  return jwt.sign(

    {
      id: user._id,
      email: user.email
    },

    process.env.JWT_SECRET,

    {
      expiresIn:
        process.env.ACCESS_TOKEN_EXPIRES
    }

  );

};

const generateRefreshToken = (user) => {

  return jwt.sign(

    {
      id: user._id
    },

    process.env.JWT_SECRET,

    {
      expiresIn:
        process.env.REFRESH_TOKEN_EXPIRES
    }

  );

};

export const register = async (
  req,
  res
) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({
      errors: errors.array()
    });

  }

  try {

    const {
      nombre,
      email,
      password
    } = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({
        error: "El usuario ya existe"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await User.create({

      nombre,

      email,

      password: hashedPassword

    });

    res.status(201).json({

      mensaje:
        "Usuario registrado"

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

export const login = async (
  req,
  res
) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({
      errors: errors.array()
    });

  }

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        error: "Credenciales invalidas"
      });

    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(400).json({
        error: "Credenciales invalidas"
      });

    }

    const accessToken =
      generateAccessToken(user);

    const refreshToken =
      generateRefreshToken(user);

    user.refreshToken =
      refreshToken;

    await user.save();

    res.json({

      accessToken,

      refreshToken

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

export const refresh = async (
  req,
  res
) => {

  const { refreshToken } = req.body;

  if (!refreshToken) {

    return res.status(401).json({
      error: "Refresh token requerido"
    });

  }

  try {

    const user =
      await User.findOne({
        refreshToken
      });

    if (!user) {

      return res.status(403).json({
        error: "Refresh token invalido"
      });

    }

    jwt.verify(

      refreshToken,

      process.env.JWT_SECRET,

      (error) => {

        if (error) {

          return res.status(403).json({
            error:
              "Token invalido"
          });

        }

        const accessToken =
          generateAccessToken(user);

        res.json({
          accessToken
        });

      }

    );

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

export const logout = async (
  req,
  res
) => {

  const { refreshToken } = req.body;

  const user =
    await User.findOne({
      refreshToken
    });

  if (!user) {

    return res.sendStatus(204);

  }

  user.refreshToken = null;

  await user.save();

  res.json({
    mensaje:
      "Logout exitoso"
  });

};