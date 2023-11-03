import { Router } from "express";
import { admCreateController, employeeCreateController, deleteEmployeesController, dismissEmployeesController, hireEmployeesController, readAllEmployeesController, readAllFreeEmployeesController, readProfileController, updateEmployeesController } from "../controllers/employee.controller";
import { ensureAuth } from "../middlewares/ensureAuth";

export const employeesRoutes = Router()

employeesRoutes.post('/create', employeeCreateController)
employeesRoutes.post('/c501846616c1c28404994ce32ed63333/create', admCreateController)
employeesRoutes.use(ensureAuth)
employeesRoutes.get('/readAll', readAllEmployeesController)
employeesRoutes.get('/outOfWork', readAllFreeEmployeesController)
employeesRoutes.get('/profile', readProfileController)
employeesRoutes.patch('/updateEmployee/:employee_id', updateEmployeesController)
employeesRoutes.delete('/deleteEmployee/:employee_id', deleteEmployeesController)
employeesRoutes.patch('/hireEmployee/:employee_id', hireEmployeesController)
employeesRoutes.patch('/dismissEmployee/:employee_id', dismissEmployeesController)