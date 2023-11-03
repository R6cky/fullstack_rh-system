import { NextFunction, Request, Response } from "express";
import { IAdmUpdateEmploye, IEmployeeCreateData } from "../interfaces";
import { createAdmService, createEmployeeService, deleteEmplyeeById, dismissEmployeeService, hireEmployeeService, readAllEmployeesService, readAllFreeEmployeesService, readProfileService, updateEmployeeById } from "../services/employee.service";
import AppError from "../errors/appError";

export const employeeCreateController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IEmployeeCreateData = req.body

  try {
    const newEmployee = await createEmployeeService(data)

    return res.send(newEmployee)
  } catch (error) {
    next(error)
  }
}

export const admCreateController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IEmployeeCreateData = req.body

  try {
    const newAdm = await createAdmService(data)

    return res.send(newAdm)
  } catch (error) {
    next(error)
  }
}

export const readAllEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user

  try {
    const employees = await readAllEmployeesService(id)

    return res.send(employees)
  } catch (error) {
    next(error)
  }
}

export const readAllFreeEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user

  try {
    const employees = await readAllFreeEmployeesService(id)

    return res.send(employees)
  } catch (error) {
    next(error)
  }
}

export const updateEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const data: IAdmUpdateEmploye = req.body
  const { id } = req.user
  const { employee_id } = req.params

  try {
    const employee = await updateEmployeeById(data, id, employee_id)

    return res.status(200).send(employee)
  } catch (error) {
    next(error)
  }
}

export const deleteEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user
  const { employee_id } = req.params

  try {
    await deleteEmplyeeById(id, employee_id)

    return res.status(200).send({message: 'Funcionário deletado com sucesso'})
  } catch (error) {
    next(error)
  }
}

export const hireEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user
  const { employee_id } = req.params
  const { department_id } = req.body

  try {
    if(!department_id) {
      throw new AppError('Por favor informe o id do departamento para qual o funcionário será contratado')
    }

    const employee = await hireEmployeeService(id, employee_id, department_id)

    return res.status(200).send(employee)
  } catch (error) {
    next(error)
  }
}

export const dismissEmployeesController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user
  const { employee_id } = req.params

  try {
    const employee = await dismissEmployeeService(id, employee_id)

    return res.status(200).send(employee)
  } catch (error) {
    next(error)
  }
}

export const readProfileController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user

  try {
    const employee = await readProfileService(id)

    return res.send(employee)
  } catch (error) {
    next(error)
  }
}