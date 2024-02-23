import { useContext } from "react";
import { DepartmentCard } from "./DepartmentCard";
import { StyleDepartmentList } from "./style";
import { CompanyContext } from "../../../../context/ContextCompanies";
import { ModalContext } from "../../../../context/ContextModals";
import { DepartmentEdit } from "../../../Modals/DepartmentEdit";
import { DepartmentRemove } from "../../../Modals/DepartmentRemove";
import { DepartmentView } from "../../../Modals/DepartmentView";

export const DepartmentList = () => {
  const { departmentsByCompany } = useContext(CompanyContext);
  const { modalDepartmentEdit, modalDepartmentRemove, modalDepartmentView } =
    useContext(ModalContext);

  return (
    <StyleDepartmentList>
      {departmentsByCompany.map((department: any) => {
        return <DepartmentCard key={department.id} department={department} />;
      })}
      {modalDepartmentEdit ? <DepartmentEdit /> : null}
      {modalDepartmentRemove ? <DepartmentRemove /> : null}
      {modalDepartmentView ? <DepartmentView /> : null}
    </StyleDepartmentList>
  );
};
