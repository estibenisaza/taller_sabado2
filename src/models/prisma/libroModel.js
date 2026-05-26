import { prisma } from "../../config/prisma.js";

export const getAll = async () => {

  return await prisma.libro.findMany({

    include: {

      autor: true,
      categoria: true

    }

  });

};

export const getById = async (id) => {

  return await prisma.libro.findUnique({

    where: {

      id: Number(id)

    },

    include: {

      autor: true,
      categoria: true

    }

  });

};

export const create = async (data) => {

  return await prisma.libro.create({

    data

  });

};

export const update = async (
  id,
  data
) => {

  return await prisma.libro.update({

    where: {

      id: Number(id)

    },

    data

  });

};

export const remove = async (id) => {

  return await prisma.libro.delete({

    where: {

      id: Number(id)

    }

  });

};