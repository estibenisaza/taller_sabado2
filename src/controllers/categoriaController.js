import * as Categoria from "../models/mongoose/categoriaModel.js";

export const getCategorias = async (
  req,
  res
) => {

  const data = await Categoria.getAll();

  res.json(data);

};

export const getCategoria = async (
  req,
  res
) => {

  const data = await Categoria.getById(
    req.params.id
  );

  res.json(data);

};

export const crearCategoria = async (
  req,
  res
) => {

  const data = await Categoria.create(
    req.body
  );

  res.json(data);

};

export const actualizarCategoria = async (
  req,
  res
) => {

  const data = await Categoria.update(
    req.params.id,
    req.body
  );

  res.json(data);

};

export const eliminarCategoria = async (
  req,
  res
) => {

  await Categoria.remove(
    req.params.id
  );

  res.json({
    mensaje: "Categoria eliminada"
  });

};