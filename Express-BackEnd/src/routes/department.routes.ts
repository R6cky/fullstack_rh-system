import { Router } from "express";
import { ensureAuth } from "../middlewares/ensureAuth";
import { createDepartmentController, deleteDepartmentController, readAllDepartmentsByCompanyController, readAllDepartmentsController, readDepartmentsByIdController, updateDepartmentController } from "../controllers/department.controller";

export const departmentRoutes = Router()

departmentRoutes.use(ensureAuth)
departmentRoutes.post('/create', createDepartmentController)
departmentRoutes.get('/readAll', readAllDepartmentsController)
departmentRoutes.get('/readById/:department_id', readDepartmentsByIdController)
departmentRoutes.get('/readByCompany/:company_id', readAllDepartmentsByCompanyController)
departmentRoutes.patch('/update/:department_id', updateDepartmentController)
departmentRoutes.delete('/delete/:department_id', deleteDepartmentController)