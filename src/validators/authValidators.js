import { body } from "express-validator";

export const registerValidator = [

  body("nombre")
    .notEmpty()
    .withMessage(
      "El nombre es obligatorio"
    ),

  body("email")
    .isEmail()
    .withMessage(
      "Email invalido"
    ),

  body("password")
    .isLength({ min: 6 })
    .withMessage(
      "La contraseña debe tener minimo 6 caracteres"
    )

];

export const loginValidator = [

  body("email")
    .isEmail()
    .withMessage(
      "Email invalido"
    ),

  body("password")
    .notEmpty()
    .withMessage(
      "La contraseña es obligatoria"
    )

];