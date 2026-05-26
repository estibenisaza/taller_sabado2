import Autor from "./schemas/Autor.js";

export const getAll = async () => {

  return await Autor.find();

};

export const getById = async (id) => {

  return await Autor.findById(id);

};

export const create = async (data) => {

  return await Autor.create(data);

};

export const update = async (
  id,
  data
) => {

  return await Autor.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

};

export const remove = async (id) => {

  return await Autor.findByIdAndDelete(id);

};