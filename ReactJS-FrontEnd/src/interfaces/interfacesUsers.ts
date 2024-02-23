export interface iDataUserLogin {
    email: string;
    password: string;
  };


  export interface iReturnDataUserLogin {
    authToken: string
    isAdm: boolean 
}


export interface iEmployeesUsers {
    company_id: string
    department_id: string
    email: string
    id: string
    is_admin: boolean
    name: string
}

export interface iNotEmployees {
    company_id:string
    department_id:string
    email:string
    id:string
    is_admin:boolean
    name:string
}


export interface iDataUserDefault extends iNotEmployees{
    
}

export interface iRegisterUserData {
    name: string
    email: string,
    password: number
}


export interface iReturnRegisteredUserData {
    company: null
    department: null
    email: string
    id: string
    name: string
}