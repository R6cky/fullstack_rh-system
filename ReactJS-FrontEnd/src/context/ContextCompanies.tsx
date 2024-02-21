import { createContext, useState } from "react";
import { api } from "../services/api";
import {
  iCategories,
  iCompanies,
  iDepartments,
} from "../interfaces/interfacesContextCompanies";

export const CompanyContext = createContext({});

export const CompanyProvider = ({ children }: any) => {
  const [companies, setCompanies] = useState([] as iCompanies[]);
  const [departmentsByCompany, setDepartmentsByCompany] = useState(
    [] as Array<iDepartments>
  );
  const [sectors, setSectors] = useState([] as iCategories[]);
  // const [dataCompanyById, setDataCompanyById] = useState({} as any);
  // const [dataDepartmentById, setDataDepartmentById] = useState({} as any);

  const getCompanies = async (): Promise<void> => {
    try {
      const request = await api.get("/companies/readAll");
      const reqJson: Array<iCompanies> = request.data;
      setCompanies(reqJson);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartmentByCompany = async (companyId: string) => {
    const token: string | null = localStorage.getItem("token");

    if (companyId === "Selecionar empresa") {
      return;
    }

    try {
      const request = await api.get(`/departments/readByCompany/${companyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const reqJson: Array<iDepartments> = request.data;
      setDepartmentsByCompany(reqJson);
    } catch (error) {
      console.log(error);
    }
  };

  const getSectors = async (): Promise<void> => {
    try {
      const request: any = await api.get("categories/readAll");
      const reqJson: Array<iCategories> = request.data;
      setSectors(reqJson);
    } catch (error) {
      console.log(error);
    }
  };

  // const getCompanyById = async (id: string) => {
  //   const token: string | null = localStorage.getItem("token");

  //   try {
  //     const request: iCompanies = await api.get(`/companies/readById/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setDataCompanyById(request);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getDepartmentById = async (id: string): Promise<void> => {
  //   const token: string | null = localStorage.getItem("token");
  //   try {
  //     const request = await api.get(`/departments/readById/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setDataDepartmentById(request.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <CompanyContext.Provider
      value={{
        companies,
        getCompanies,
        getDepartmentByCompany,
        getSectors,
        //getCompanyById,
        //getDepartmentById,
        setDepartmentsByCompany,
        dataDepartmentById,
        dataCompanyById,
        departmentsByCompany,
        sectors,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
