import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
  },
  { versionKey: false }
);

const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario;
