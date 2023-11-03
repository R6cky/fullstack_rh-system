import { ICreateCategory } from "../interfaces";
import AppError from "../errors/appError";
import { prisma } from "..";



export async function createCategoryService(data: ICreateCategory, id: string) {
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
      name: data.name
    }
  })

  if (checkCategory) {
    throw new AppError('Essa categoria já está cadastrada', 400)
  }

  const newCategory = await prisma.category.create({
    data: {
      name: data.name
    }
  })

  return newCategory
}

export async function readAllCategoriesService() {
  return await prisma.category.findMany()
}