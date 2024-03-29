import { useContext } from "react";
import { EmployeeCard } from "./EmployeesCard";
import { StyleEmployeeList } from "./style";
import { CompanyContext } from "../../../../context/ContextCompanies";

export const EmployeeList = () => {
  const { dataDepartmentById } = useContext(CompanyContext);

  return (
    <StyleEmployeeList>
      {dataDepartmentById.employees
        ? dataDepartmentById.employees.map((employee: any) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))
        : false}
    </StyleEmployeeList>
  );
};
