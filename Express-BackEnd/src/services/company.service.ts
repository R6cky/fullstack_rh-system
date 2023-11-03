import { prisma } from "..";
import AppError from "../errors/appError";
import { ICompanyCreateData } from "../interfaces";

export const companyCreateService = async (data: ICompanyCreateData, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if(!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado')
  }

  if(!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem cadastrar uma nova empresa')
  }

  const checkCategory = await prisma.category.findUnique({
    where: {
      id: data.category_id
    }
  })

  if(!checkCategory) {
    throw new AppError('Categoria não encontrada, por favor verifique o id informado e tente novamente')
  }

  const checkName = await prisma.company.findUnique({
    where: {
      name: data.name
    }
  })

  if(checkName) {
    throw new AppError('Empressa já cadastrada')
  }

  const newCompany = await prisma.company.create({
    data
  })

  return newCompany
}

export const readAllCompanyService = async () => {
  return await prisma.company.findMany()
}

export const readCompanyByIdService = async (id: string) => {
  const company =  await prisma.company.findUnique({
    where: {
      id
    },
    include: {
      category: true,
      departments: true,
      employees: true
    }
  })
  console.log(company)

  if(!company) {
    throw new AppError('Empresa não encontrada, por favor verifique o id informado e tente novamente')
  }

  return company
}

export const readCompaniesByCategoryService = async (category_name: string) => {
  const category = await prisma.category.findUnique({
    where: {
      name: category_name
    }
  })

  if(!category) {
    throw new AppError('Categoria não encontrada, por favor verifique as categorias disponíveis e tente novamente')
  }

  const companies = await prisma.company.findMany({
    where: {
      category_id: category.id
    }
  })

  if(!companies) {
    throw new AppError('Categoria inválida, por favor verifique o id da categoria informada e tente novamente')
  }

  return companies
}