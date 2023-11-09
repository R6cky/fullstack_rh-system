import { useContext } from "react";
import { DepartmentCard } from "./DepartmentCard";
import { StyleDepartmentList } from "./style";
import { CompanyContext } from "../../../../context/ContextCompanies";

export const DepartmentList = () => {
  const { departmentsByCompany } = useContext(CompanyContext);

  return (
    <StyleDepartmentList>
      {departmentsByCompany.map((department: any) => {
        return <DepartmentCard key={department.id} department={department} />;
      })}
    </StyleDepartmentList>
  );
};
