import express from "express";

import {
  getLibros,
  createLibro
} from "../controllers/libroController.js";

const router = express.Router();

router.get("/", getLibros);
router.post("/", createLibro);

export default router;