import Libro from "./schemas/Libro.js";

export const getAll = async () => {

  return await Libro.find()
    .populate("autor")
    .populate("categoria");

};

export const getById = async (id) => {

  return await Libro.findById(id)
    .populate("autor")
    .populate("categoria");

};

export const create = async (data) => {

  return await Libro.create(data);

};

export const update = async (
  id,
  data
) => {

  return await Libro.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

};

export const remove = async (id) => {

  return await Libro.findByIdAndDelete(id);

};