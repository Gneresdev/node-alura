import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json());

  app.use("/api/livros", livros);
  app.use("/api/autores", autores);
  app.use("/api/acervo", livros);
};

export default routes;
