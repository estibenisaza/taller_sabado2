import express from "express";

import {
  getAutores,
  getAutor,
  createAutor,
  updateAutor,
  deleteAutor
} from "../controllers/autorController.js";

const router = express.Router();

router.get("/", getAutores);
router.get("/:id", getAutor);
router.post("/", createAutor);
router.put("/:id", updateAutor);
router.delete("/:id", deleteAutor);

export default router;