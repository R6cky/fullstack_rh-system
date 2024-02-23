export interface iCompanies {
    id: string
    name: string
    description: string
    category_id: string
}

export interface iCategories {
    id: string
    name: string
}


export interface iDepartments {
    id: string
    name: string
    description: string
    company_id: string
    company: Array<iCompanies>
}


