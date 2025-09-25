import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

router.post("/api/usuarios/cadastro", UserController.cadastrarUsuario);
router.post("/api/usuarios/login", UserController.login);

export default router;
