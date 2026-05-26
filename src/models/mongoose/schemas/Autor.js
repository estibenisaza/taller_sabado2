import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({

  nombre: {

    type: String,
    required: true

  },

  pais: {

    type: String,
    required: true

  }

});

export default mongoose.model(
  "Autor",
  autorSchema
);