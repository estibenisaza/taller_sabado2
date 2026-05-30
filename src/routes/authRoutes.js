import express from "express";

import {

  register,
  login,
  refresh,
  logout

} from "../controllers/authController.js";

import {

  registerValidator,
  loginValidator

} from "../validators/authValidators.js";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  register
);

router.post(
  "/login",
  loginValidator,
  login
);

router.post(
  "/refresh",
  refresh
);

router.post(
  "/logout",
  logout
);

export default router;