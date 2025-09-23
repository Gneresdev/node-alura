import mongoose from "mongoose";

const conectaNaDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Banco conectado com sucesso!");
    return mongoose.connection;  // <- importante retornar a conexão
  } catch (error) {
    console.error("Erro de conexão", error);
  }
};

export default conectaNaDatabase;
