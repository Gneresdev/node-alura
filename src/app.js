import express from "express";
import cors from "cors"; // Importa o cors
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(cors()); // Ativa CORS para todas as rotas
app.use(express.json()); // Habilita o parsing de JSON no corpo da requisição

routes(app);

// A parte do app.delete com buscaLivro e livros parece que está incompleta,
// e pode estar conflitando com o que já está nas rotas, então recomendo remover isso daqui
// caso você já tenha a rota DELETE configurada dentro do controller e routes.

export default app;
