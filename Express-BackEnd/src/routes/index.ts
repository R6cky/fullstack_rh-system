import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { sessionRoutes } from "./session.routes";
import { employeesRoutes } from "./employee.routes";
import { companyRoutes } from "./company.routes";
import { departmentRoutes } from "./department.routes";

export const routes = Router()

routes.use('/categories', categoryRoutes)
routes.use('/auth', sessionRoutes)
routes.use('/employees', employeesRoutes)
routes.use('/companies', companyRoutes)
routes.use('/departments', departmentRoutes)