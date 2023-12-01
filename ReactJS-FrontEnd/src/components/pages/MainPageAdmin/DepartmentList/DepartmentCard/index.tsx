import { useContext, useState } from "react";
import { StyleDepartmentCard } from "./style";
import { ModalContext } from "../../../../../context/ContextModals";
import { CompanyContext } from "../../../../../context/ContextCompanies";

export const DepartmentCard = ({ department }: any) => {
  const {
    activateModal,
    modalDepartmentRemove,
    setModalDepartmentRemove,
    modalDepartmentEdit,
    setModalDepartmentEdit,
    modalDepartmentView,
    setModalDepartmentView,
  } = useContext(ModalContext);
  const { companies } = useContext(CompanyContext);

  return (
    <StyleDepartmentCard>
      {department.id}
      <div className="left-data">
        <h4 className="title-department">{department.name}</h4>
        <p className="description-department">{department.description}</p>
        {companies.map((company: any) =>
          company.id === department.company_id ? (
            <span className="department-owner" key={company.id}>
              {company.name}
            </span>
          ) : (
            false
          )
        )}
      </div>

      <div className="right-data">
        <span className="view">
          <img
            src=""
            alt="img-view"
            onClick={() =>
              activateModal(
                modalDepartmentView,
                setModalDepartmentView,
                department
              )
            }
          />
        </span>
        <span className="edit-department">
          <img
            src=""
            alt="edit"
            onClick={() =>
              activateModal(
                modalDepartmentEdit,
                setModalDepartmentEdit,
                department
              )
            }
          />
        </span>
        <span className="remove-department">
          <img
            src=""
            alt="remove"
            onClick={() =>
              activateModal(
                modalDepartmentRemove,
                setModalDepartmentRemove,
                department
              )
            }
          />
        </span>
      </div>
    </StyleDepartmentCard>
  );
};
