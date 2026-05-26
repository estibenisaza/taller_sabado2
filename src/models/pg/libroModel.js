import pool from "../../config/db.js";

export const getAll = async () => {
  const result = await pool.query(`
    SELECT libros.*, 
           autores.nombre AS autor,
           categorias.nombre AS categoria
    FROM libros
    JOIN autores
      ON libros.autor_id = autores.id
    JOIN categorias
      ON libros.categoria_id = categorias.id
  `);

  return result.rows;
};

export const create = async (
  titulo,
  autor_id,
  categoria_id
) => {

  const result = await pool.query(
    `
    INSERT INTO libros(
      titulo,
      autor_id,
      categoria_id
    )
    VALUES($1,$2,$3)
    RETURNING *
    `,
    [titulo, autor_id, categoria_id]
  );

  return result.rows[0];
};