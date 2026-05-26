import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({

  titulo: {

    type: String,
    required: true

  },

  precio: {

    type: Number,
    required: true

  },

  autor: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Autor",

    required: true

  },

  categoria: {

    type: mongoose.Schema.Types.ObjectId,

    ref: "Categoria",

    required: true

  }

});

export default mongoose.model(
  "Libro",
  libroSchema
);