import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import { connectDB } from "./src/config/db.js";

import { connectMongo } from "./src/config/mongoose.js";

import categoriaRoutes from "./src/routes/categorias.js";

import autorRoutes from "./src/routes/autores.js";

import libroRoutes from "./src/routes/libros.js";

import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT =
  process.env.PORT || 3500;

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/categorias",
  categoriaRoutes
);

app.use(
  "/api/autores",
  autorRoutes
);

app.use(
  "/api/libros",
  libroRoutes
);

const startServer = async () => {

  try {

    await connectDB();

    await connectMongo();

    app.listen(PORT, () => {

      console.log(
        `Server running on port ${PORT}`
      );

    });

  } catch (error) {

    console.log(error);

  }

};

startServer();