import * as Autor from "../models/mongoose/autorModel.js";

export const getAutores = async (
  req,
  res
) => {

  const data = await Autor.getAll();

  res.json(data);

};

export const getAutor = async (
  req,
  res
) => {

  const data = await Autor.getById(
    req.params.id
  );

  res.json(data);

};

export const createAutor = async (
  req,
  res
) => {

  const data = await Autor.create(
    req.body
  );

  res.json(data);

};

export const updateAutor = async (
  req,
  res
) => {

  const data = await Autor.update(
    req.params.id,
    req.body
  );

  res.json(data);

};

export const deleteAutor = async (
  req,
  res
) => {

  await Autor.remove(
    req.params.id
  );

  res.json({
    mensaje: "Autor eliminado"
  });

};