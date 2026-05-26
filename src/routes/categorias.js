import express from "express";

import {
  getCategorias,
  getCategoria,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria
} from "../controllers/categoriaController.js";

const router = express.Router();

router.get("/", getCategorias);

router.get("/:id", getCategoria);

router.post("/", crearCategoria);

router.put("/:id", actualizarCategoria);

router.delete("/:id", eliminarCategoria);

export default router;