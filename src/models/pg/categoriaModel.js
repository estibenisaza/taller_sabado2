import pool from "../../config/db.js";

export const getAll = async () => {

  const result = await pool.query(
    "SELECT * FROM categorias"
  );

  return result.rows;
};

export const getById = async (id) => {

  const result = await pool.query(
    "SELECT * FROM categorias WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

export const create = async (nombre) => {

  const result = await pool.query(
    `
    INSERT INTO categorias(nombre)
    VALUES($1)
    RETURNING *
    `,
    [nombre]
  );

  return result.rows[0];
};

export const update = async (
  id,
  nombre
) => {

  const result = await pool.query(
    `
    UPDATE categorias
    SET nombre = $1
    WHERE id = $2
    RETURNING *
    `,
    [nombre, id]
  );

  return result.rows[0];
};

export const remove = async (id) => {

  await pool.query(
    "DELETE FROM categorias WHERE id = $1",
    [id]
  );

};