import { prisma } from "..";
import AppError from "../errors/appError";
import { IDepartmentCreateData, IDepartmentUpdateData } from "../interfaces";

export const createDepartmentService = async (data: IDepartmentCreateData, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem cadastrar um novo departamento', 401)
  }

  const checkCompany = await prisma.company.findUnique({
    where: {
      id: data.company_id
    }
  })

  if (!checkCompany) {
    throw new AppError('Empresa não encontrada, por favor verifique o id da empresa informada e tente novamente')
  }

  const checkDepartment = await prisma.department.findFirst({
    where: {
      name: data.name,
      company_id: data.company_id
    }
  })

  if (checkDepartment) {
    throw new AppError('Departamento já cadastrado nesta empresa')
  }

  const newDepartment = await prisma.department.create({
    data
  })

  return newDepartment
}

export const readAllDepartmentsService = async (id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem consultar os departamentos', 401)
  }

  return await prisma.department.findMany()
}

export const readDepartmentsByCompanyService = async (company_id: string, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem consultar os departamentos', 401)
  }

  const checkCompany = await prisma.company.findUnique({
    where: {
      id: company_id
    }
  })

  if (!checkCompany) {
    throw new AppError('Empresa não encontrada, por favor verifique o id e tente novamente', 404)
  }

  const departments = await prisma.department.findMany({
    where: {
      company_id
    }
  })

  return departments
}

export const readDepartmentByIdService = async (department_id: string, id: string) => {
  const department = await prisma.department.findUnique({
    where: {
      id: department_id
    },
    include: {
      company: true,
      employees: true
    }
  })

  if (!department) {
    throw new AppError('Departamento não encontrado, por favor verifique o id informado e tente novamente', 404)
  }

  return department
}

export const updateDepartmentByIdService = async (department_id: string, data: IDepartmentUpdateData, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem atualizar os departamentos', 401)
  }

  const department = await prisma.department.findUnique({
    where: {
      id: department_id
    }
  })

  if (!department) {
    throw new AppError('Departamento não encontrado, por favor verifique o id informado e tente novamente', 404)
  }

  const updateDepartment = await prisma.department.update({
    where: {
      id: department_id
    },
    data: {
      description: data.description,
      name: data.name
    }
  })

  return updateDepartment
}

export const deleteDepartmentByIdService = async (department_id: string, id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem deletar os departamentos', 401)
  }

  const department = await prisma.department.findUnique({
    where: {
      id: department_id
    }
  })

  if (!department) {
    throw new AppError('Departamento não encontrado, por favor verifique o id informado e tente novamente', 404)
  }

  const deleted = await prisma.department.delete({
    where: {
      id: department_id
    }
  })

  return deleted

}