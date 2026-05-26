import Categoria from "./schemas/Categoria.js";

export const getAll = async () => {

  return await Categoria.find();

};

export const getById = async (id) => {

  return await Categoria.findById(id);

};

export const create = async (data) => {

  return await Categoria.create(data);

};

export const update = async (
  id,
  data
) => {

  return await Categoria.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

};

export const remove = async (id) => {

  return await Categoria.findByIdAndDelete(id);

};