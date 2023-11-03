import { NextFunction, Request, Response } from "express";
import { ICompanyCreateData } from "../interfaces";
import { companyCreateService, readAllCompanyService, readCompaniesByCategoryService, readCompanyByIdService } from "../services/company.service";

export const createCompanyController = async (req: Request, res: Response, next: NextFunction) => {
  const data: ICompanyCreateData = req.body
  const { id } = req.user

  try {
    const newCompany = await companyCreateService(data, id)

    return res.send(newCompany)
  } catch (error) {
    next(error)
  }
}

export const readAllCompaniesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companies = await readAllCompanyService()

    if (companies.length === 0) {
      return res.send({ message: 'Nenhuma empresa cadastrada' })
    } else {
      return res.send(companies)
    }
  } catch (error) {
    next(error)
  }
}

export const readCompanyByIdController = async (req: Request, res: Response, next: NextFunction) => { 
  const {company_id} = req.params
  try {
    const company = await readCompanyByIdService(company_id)

    return res.send(company)
  } catch (error) {
    next(error)
  }
}

export const readCompaniesByCategoryController = async (req: Request, res: Response, next: NextFunction) => { 
  const {category_name} = req.params
  console.log(category_name)
  try {
    const companies = await readCompaniesByCategoryService(category_name)

    return res.send(companies)
  } catch (error) {
    next(error)
  }
}