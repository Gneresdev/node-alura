import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import userRoutes from "./userRoutes.js"; // Importe a rota de usuários

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Sebo Virtual"));

  app.use(express.json(), livros, autores, userRoutes);

  // referencia as rotas e como utiliza-las

  // app.use que define todas as suas rotas.
  // app.use("/api/livros", livros);
  // app.use("/api/autores", autores);
  // app.use("/api/acervo", livros);
};

export default routes;
