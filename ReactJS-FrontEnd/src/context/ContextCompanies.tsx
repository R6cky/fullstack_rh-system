import { createContext, useState } from "react";
import { api } from "../services/api";

export const CompanyContext = createContext({} as any);

export const CompanyProvider = ({ children }: any) => {
  const [companies, setCompanies] = useState([] as any);
  const [departmentsByCompany, setDepartmentsByCompany] = useState([]);
  const [sectors, setSectors] = useState([] as any);
  const [dataCompanyById, setDataCompanyById] = useState({} as any);
  const [dataDepartmentById, setDataDepartmentById] = useState({} as any);

  const getCompanies = async () => {
    try {
      const request = await api.get("/companies/readAll");
      setCompanies(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartmentByCompany = async (companyId: any) => {
    const token = localStorage.getItem("token");

    if (companyId === "Selecionar empresa") {
      return;
    }

    try {
      const request = await api.get(`/departments/readByCompany/${companyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDepartmentsByCompany(request.data);
      return request.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getSectors = async () => {
    try {
      const request = await api.get("categories/readAll");
      setSectors(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyById = async (id: any) => {
    const token = localStorage.getItem("token");

    try {
      const request = await api.get(`/companies/readById/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDataCompanyById(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartmentById = async (id: any) => {
    const token = localStorage.getItem("token");
    try {
      const request = await api.get(`/departments/readById/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDataDepartmentById(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CompanyContext.Provider
      value={{
        companies,
        getCompanies,
        getDepartmentByCompany,
        getSectors,
        getCompanyById,
        getDepartmentById,
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
