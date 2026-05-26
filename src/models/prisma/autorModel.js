import { prisma } from "../../config/prisma.js";

export const getAll = async () => {

  return await prisma.autor.findMany();

};

export const getById = async (id) => {

  return await prisma.autor.findUnique({

    where: {

      id: Number(id)

    }

  });

};

export const create = async (data) => {

  return await prisma.autor.create({

    data

  });

};

export const update = async (
  id,
  data
) => {

  return await prisma.autor.update({

    where: {

      id: Number(id)

    },

    data

  });

};

export const remove = async (id) => {

  return await prisma.autor.delete({

    where: {

      id: Number(id)

    }

  });

};