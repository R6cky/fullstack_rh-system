import { Router } from "express";
import { createCategoryController, readAllCategoriesController } from "../controllers/category.controller";
import { ensureAuth } from "../middlewares/ensureAuth";

export const categoryRoutes = Router()

categoryRoutes.get('/readAll', readAllCategoriesController)
categoryRoutes.use(ensureAuth)
categoryRoutes.post('/create', createCategoryController)