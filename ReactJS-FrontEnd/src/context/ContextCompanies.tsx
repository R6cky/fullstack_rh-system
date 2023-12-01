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
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk0NDg0MjUsImV4cCI6MTczMDk4NDQyNSwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.V9pgYKHRWHwU6t_fMgMjiN_qjmIiDX6PVlar_r9Hv1Q";

    if (companyId === "Selecionar empresa") {
      return;
    }

    try {
      const request = await api.get(`/departments/readByCompany/${companyId}`, {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });

      setDepartmentsByCompany(request.data);
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
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE0MzMyOTYsImV4cCI6MTczMjk2OTI5Niwic3ViIjoiMzU0YjE1YWUtNzJhYy00NjRjLWFhMTItMGExMzkwOTJhNTY0In0.GirscYSPrXk_RRxk-p-SMj-ftFBcD8UViD0yPr1pMNs";
    try {
      const request = await api.get(`/companies/readById/${id}`, {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });
      setDataCompanyById(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartmentById = async (id: any) => {
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE0MzMyOTYsImV4cCI6MTczMjk2OTI5Niwic3ViIjoiMzU0YjE1YWUtNzJhYy00NjRjLWFhMTItMGExMzkwOTJhNTY0In0.GirscYSPrXk_RRxk-p-SMj-ftFBcD8UViD0yPr1pMNs";
    try {
      const request = await api.get(`/departments/readById/${id}`, {
        headers: { Authorization: `Bearer ${bearerToken}` },
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
