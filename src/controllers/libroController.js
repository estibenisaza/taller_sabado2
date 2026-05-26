import * as Libro from "../models/mongoose/libroModel.js";

export const getLibros = async (
  req,
  res
) => {

  const data = await Libro.getAll();

  res.json(data);

};

export const getLibro = async (
  req,
  res
) => {

  const data = await Libro.getById(
    req.params.id
  );

  res.json(data);

};

export const createLibro = async (
  req,
  res
) => {

  const data = await Libro.create(
    req.body
  );

  res.json(data);

};

export const updateLibro = async (
  req,
  res
) => {

  const data = await Libro.update(
    req.params.id,
    req.body
  );

  res.json(data);

};

export const deleteLibro = async (
  req,
  res
) => {

  await Libro.remove(
    req.params.id
  );

  res.json({
    mensaje: "Libro eliminado"
  });

};