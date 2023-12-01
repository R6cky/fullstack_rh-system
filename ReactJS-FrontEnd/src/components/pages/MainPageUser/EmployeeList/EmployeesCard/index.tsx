import { StyleEmployeeCard } from "./style";

export const EmployeeCard = ({ employee }: any) => {
  return (
    <StyleEmployeeCard>
      <h4 className="employee-name">{employee.name}</h4>
    </StyleEmployeeCard>
  );
};
