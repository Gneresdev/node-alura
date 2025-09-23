import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/", LivroController.listarLivros); // lista todos os livros
routes.get("/busca", LivroController.listarLivrosPorEditora);
routes.get("/:id", LivroController.listarLivroPorId);
routes.post("/", LivroController.cadastrarLivro);
routes.put("/:id", LivroController.atualizarLivro);
routes.delete("/:id", LivroController.excluirLivro);

export default routes;
