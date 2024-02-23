export interface iDepartmentCreate {
    name: string;
    description: string;
}

export interface iDepartmentEdit{
    description: string;    
}

export interface iReturnDepartmentEdit{
    department: string;    
    message: string
}

export interface iMessageRemoveDepartment {
    message: string
}


export interface iUserEdit {
    name: string
    email: string
}


export interface iReturnUserEdit {
        id: string
        name: string,
        email: string,
        is_admin: boolean,
        company_id: string,
        department_id: string
}