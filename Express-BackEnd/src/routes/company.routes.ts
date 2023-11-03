import { Router } from "express";
import { createCompanyController, readAllCompaniesController, readCompaniesByCategoryController, readCompanyByIdController } from "../controllers/company.controller";
import { ensureAuth } from "../middlewares/ensureAuth";

export const companyRoutes = Router()

companyRoutes.get('/readAll', readAllCompaniesController)
companyRoutes.get('/readByCategory/:category_name', readCompaniesByCategoryController)
companyRoutes.use(ensureAuth)
companyRoutes.post('/create', createCompanyController)
companyRoutes.get('/readById/:company_id', readCompanyByIdController)