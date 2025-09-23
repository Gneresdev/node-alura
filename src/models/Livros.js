import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema,
    sinopse: { type: String }, // <-- Adicionado
    tipo: { type: String }, // <-- Adicionado
    categoria: { type: String }, // <-- Adicionado
    idioma: { type: String }, // <-- Adicionado
    imagemUrl: { type: String }, // <-- Adicionado
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
