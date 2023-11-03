import { Router } from "express";
import { loginController } from "../controllers/session.controller";

export const sessionRoutes = Router()

sessionRoutes.post('/login', loginController)