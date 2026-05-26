import { prisma } from "../../config/prisma.js";

export const getAll = async () => {

  return await prisma.categoria.findMany();

};

export const getById = async (id) => {

  return await prisma.categoria.findUnique({

    where: {

      id: Number(id)

    }

  });

};

export const create = async (data) => {

  return await prisma.categoria.create({

    data

  });

};

export const update = async (
  id,
  data
) => {

  return await prisma.categoria.update({

    where: {

      id: Number(id)

    },

    data

  });

};

export const remove = async (id) => {

  return await prisma.categoria.delete({

    where: {

      id: Number(id)

    }

  });

};