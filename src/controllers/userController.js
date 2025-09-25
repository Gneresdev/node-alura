import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";

class UserController {
  static async cadastrarUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body;

      // Criptografand a senha antes de salvar no banco
      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const novoUsuario = { nome, email, senha: senhaCriptografada };

      const usuarioCriado = await Usuario.create(novoUsuario);

      res.status(201).json(usuarioCriado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar usuário.` });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;

      // Busca o usuário pelo e-mail
      const usuario = await Usuario.findOne({ email });

      // Verifica se o usuário existe
      if (!usuario) {
        return res.status(401).json({ message: "E-mail ou senha inválidos." });
      }

      // Compara a senha do login com a senha criptografada do banco
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({ message: "E-mail ou senha inválidos." });
      }

      res.status(200).json({ message: "Login realizado com sucesso." });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha no login.` });
    }
  }
}

export default UserController;
