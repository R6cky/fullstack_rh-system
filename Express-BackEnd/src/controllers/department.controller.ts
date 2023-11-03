import { NextFunction, Request, Response } from "express";
import { IDepartmentCreateData, IDepartmentUpdateData } from "../interfaces";
import { createDepartmentService, deleteDepartmentByIdService, readAllDepartmentsService, readDepartmentByIdService, readDepartmentsByCompanyService, updateDepartmentByIdService } from "../services/department.service";

export const createDepartmentController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IDepartmentCreateData = req.body
  const { id } = req.user

  try {
    const newDepartment = await createDepartmentService(data, id)

    return res.send(newDepartment)
  } catch (error) {
    next(error)
  }
}

export const readAllDepartmentsController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user
  try {
    const departments = await readAllDepartmentsService(id)

    return res.send(departments)
  } catch (error) {
    next(error)
  }
}

export const readDepartmentsByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user
  const { department_id } = req.params

  try {
    const department = await readDepartmentByIdService(department_id, id)

    return res.send(department)
  } catch (error) {
    next(error)
  }

}

export const readAllDepartmentsByCompanyController = async (req: Request, res: Response, next: NextFunction) => {
  const { company_id } = req.params
  const { id } = req.user

  try {
    const departments = await readDepartmentsByCompanyService(company_id, id)

    return res.send(departments)
  } catch (error) {
    next(error)
  }
}

export const updateDepartmentController = async (req: Request, res: Response, next: NextFunction) => {
  const { department_id } = req.params
  const { id } = req.user
  const data: IDepartmentUpdateData = req.body

  try {
    const department = await updateDepartmentByIdService(department_id, data, id)

    return res.status(200).send({
      message: 'Departamento atualizado com sucesso',
      department
    })
  } catch (error) {
    next(error)
  }
}

export const deleteDepartmentController = async (req: Request, res: Response, next: NextFunction) => {
  const { department_id } = req.params
  const { id } = req.user

  try {
    await deleteDepartmentByIdService(department_id, id)

    return res.status(200).send({ message: 'Departamento deletado com sucesso' })
  } catch (error) {
    next(error)
  }
}
