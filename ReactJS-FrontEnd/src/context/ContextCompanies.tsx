import { createContext, useState } from "react";
import { api } from "../services/api";

export const CompanyContext = createContext({} as any);

export const CompanyProvider = ({ children }: any) => {
  const [companies, setCompanies] = useState([] as any);
  const [departmentsByCompany, setDepartmentsByCompany] = useState([]);

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
      console.log(request);
      setDepartmentsByCompany(request.data);
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
        departmentsByCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
