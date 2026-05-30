import express from "express";

import {

  getLibros,
  getLibro,
  createLibro,
  updateLibro,
  deleteLibro

} from "../controllers/libroController.js";

import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  getLibros
);

router.get("/:id", getLibro);

router.post(
  "/",
  verifyToken,
  createLibro
);

router.put("/:id", updateLibro);

router.delete("/:id", deleteLibro);

export default router;