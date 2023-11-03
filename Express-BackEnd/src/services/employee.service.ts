import { hash } from "bcryptjs";
import { prisma } from "..";
import AppError from "../errors/appError";
import { IAdmUpdateEmploye, IEmployeeCreateData, IEmployeeResponseData } from "../interfaces";

export const createEmployeeService = async (data: IEmployeeCreateData) => {

  if (data.is_adm) {
    throw new AppError('Não é possível criar usuário administrador')
  }

  const checkEmail = await prisma.employee.findUnique({
    where: {
      email: data.email
    }
  })

  if (checkEmail) {
    throw new AppError('Email já cadastrado, por favor informe outro ou faça login')
  }

  const hashedPass = await hash(data.password, 10)


  const newEmployee = await prisma.employee.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPass,
      is_admin: data.is_adm
    },
    include: {
      company: true,
      department: true
    }
  })



  const { password, is_admin, department_id, company_id, ...rest } = newEmployee

  return rest
}

export const createAdmService = async (data: IEmployeeCreateData) => {
  if (data.company_id !== process.env.ADM_CREATE_SECRET) {
    throw new AppError('Por favor pare de tentar criar um usuário adm')
  }

  const checkEmail = await prisma.employee.findUnique({
    where: {
      email: data.email
    }
  })

  if (checkEmail) {
    throw new AppError('Email já cadastrado, por favor informe outro ou faça login')
  }

  const hashedPass = await hash(data.password, 10)


  const newEmployee = await prisma.employee.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPass,
      is_admin: data.is_adm
    },
    include: {
      company: true,
      department: true
    }
  })



  const { password, is_admin, ...rest } = newEmployee

  return rest
}

export const readAllEmployeesService = async (id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem visualizar todos os funcionários', 401)
  }

  const employees = await prisma.employee.findMany()

  const newEmployeesArray: any = []

  employees.forEach(employee => {
    if (!employee.is_admin) {
      const { password, ...rest } = employee
      newEmployeesArray.push(rest)
    }
  })

  return newEmployeesArray
}

export const readAllFreeEmployeesService = async (id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem visualizar funcionários que ainda não foram contratados', 401)
  }

  const employees = await prisma.employee.findMany({
    where: {
      department_id: null
    }
  })

  const newEmployeesArray: any = []

  employees.forEach(employee => {
    if (!employee.is_admin) {
      const { password, ...rest } = employee
      newEmployeesArray.push(rest)
    }
  })

  return newEmployeesArray
}

export const updateEmployeeById = async (data: IAdmUpdateEmploye, user_id: string, employee_id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id: user_id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem atualizar estas informações', 401)
  }

  if (data.company_id) {
    const checkCompany = await prisma.company.findUnique({
      where: {
        id: data.company_id
      }
    })

    if (!checkCompany) {
      throw new AppError('Empresa não encontrada, por favor verifique o id da empresa e tente novamente', 404)
    }
  }

  if (data.department_id) {
    const checkDepartment = await prisma.department.findUnique({
      where: {
        id: data.department_id
      }
    })

    if (!checkDepartment) {
      throw new AppError('Departamento não encontrado, por favor verifique o id do departamento e tente novamente', 404)
    }

    if (data.department_id && data.company_id && checkDepartment.company_id !== data.company_id) {
      throw new AppError("Departamente informado não pertence a empresa informada, por favor verifique os id's informados e tente novamente")
    }
  }

  if(data.email) {
    const checkEmail = await prisma.employee.findUnique({
      where: {
        email: data.email
      }
    })
  
    if (checkEmail) {
      throw new AppError('Email já cadastrado, por favor verifique o email informado e tente novamente', 401)
    }
  }

  const checkEmploye = await prisma.employee.findUnique({
    where: {
      id: employee_id
    }
  })

  if (!checkEmploye) {
    throw new AppError('Funcionário não encontrado, por favor verifique o id do funcionário e tente novamente', 404)
  }

  const updatedEmployee = await prisma.employee.update({
    where: {
      id: employee_id
    },
    data,
  })

  const { password, ...rest } = updatedEmployee

  return rest
}

export const deleteEmplyeeById = async (user_id: string, employee_id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id: user_id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem deletar um usuário', 401)
  }

  const checkEmployee = await prisma.employee.findUnique({
    where: {
      id: employee_id
    }
  })

  if (!checkEmployee) {
    throw new AppError('Funcionário não encontrado, por favor verifique o id do funcionário e tente novamente', 404)
  }

  return await prisma.employee.delete({
    where: {
      id: employee_id
    }
  })
}

export const hireEmployeeService = async (user_id: string, employe_id: string, department_id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id: user_id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem contratar um novo funcionário', 401)
  }

  const checkEmployee = await prisma.employee.findUnique({
    where: {
      id: employe_id
    }
  })

  if (!checkEmployee) {
    throw new AppError('Funcionário não encontrado, verifique o id do funcionário e tente novamente', 404)
  }

  if (checkEmployee.department_id !== null) {
    throw new AppError('Funcionário já vinculado a um departamento, para alterar o departamento deste funcionário utilize a rota "atualizar dados do Funcionário"', 401)
  }

  const checkDepartment = await prisma.department.findUnique({
    where: {
      id: department_id
    }
  })

  if (!checkDepartment) {
    throw new AppError('Departamento não encontrado, por favor verifique o id do departamento informado e tente novamente', 404)
  }

  const hireEmployee = await prisma.employee.update({
    where: {
      id: employe_id
    },
    data: {
      department_id: department_id,
      company_id: checkDepartment.company_id
    }
  })

  const { password, ...rest } = hireEmployee

  return {
    message: `Funcionário contratado para o departamento ${checkDepartment.name}`,
    employee: rest
  }
}

export const dismissEmployeeService = async (user_id: string, employe_id: string) => {
  const checkUser = await prisma.employee.findUnique({
    where: {
      id: user_id
    }
  })

  if (!checkUser) {
    throw new AppError('Usuário não encontrado, por favor verifique o id informado', 404)
  }

  if (!checkUser.is_admin) {
    throw new AppError('Apenas usuários adminstradores podem demitir um funcionário', 401)
  }

  const checkEmployee = await prisma.employee.findUnique({
    where: {
      id: employe_id
    }
  })

  if (!checkEmployee) {
    throw new AppError("funcionário não encontrado, por favor verifique o id do funcionário informado e tente novamente", 404)
  }

  const dismissEmployee = await prisma.employee.update({
    where: {
      id: employe_id
    },
    data: {
      department_id: null,
      company_id: null
    }
  })

  const { password, ...rest } = dismissEmployee

  return {
    message: 'Funcionário demitido com sucesso',
    employee: rest
  }
}

export const readProfileService = async (user_id: string) => {
  const employee = await prisma.employee.findUnique({
    where: {
      id: user_id
    }
  })

  if (!employee) {
    throw new AppError('Funcionário não encontrado, faça login e tente novamente', 404)
  }

  const { password, ...rest } = employee

  return rest
}