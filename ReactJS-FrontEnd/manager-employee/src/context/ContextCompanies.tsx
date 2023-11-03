import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CompanyContext = createContext({} as any);

export const CompanyProvider = ({children}: any) => {

    const [companies, setCompanies] = useState([] as any)


    useEffect(()=>{
        const getCompanies = async () => {
    
            try {
                const request = await api.get('/companies/readAll');
                console.log(request.data);
                setCompanies(request.data)
            } catch (error) {
                console.log(error);
            }
        }
        getCompanies();
    }, [])

    return(<CompanyContext.Provider value={{companies}}>
                {children}
           </CompanyContext.Provider>
        )
}

