export interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export interface ICreateCategory {
  name: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface IEmployeeCreateData {
  name: string
  email: string
  password: string
  is_adm?: boolean
  company_id?: string 
}

export interface ICompanyCreateData {
  name: string
  description: string
  category_id: string
}

export interface IDepartmentCreateData {
  name: string
  description: string
  company_id: string
}

export interface IAdmUpdateEmploye {
  name?: string
  email?: string
  company_id?: string
  department_id?: string
}

export interface IEmployeeResponseData extends IEmployeeCreateData {
  id: string
  company?: {
    id: string
    name: string
    description: string
    category_id: string
  }
  company_id?: string
  department?: {
    id: string
    name: string
    description: string
    company_id: string
  }
  department_id?: string
}

export interface IDepartmentUpdateData {
  name: string
  description: string
}