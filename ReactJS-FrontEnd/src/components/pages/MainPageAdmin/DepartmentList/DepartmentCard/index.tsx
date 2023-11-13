import { useContext } from "react";
import { StyleDepartmentCard } from "./style";
import { ModalContext } from "../../../../../context/ContextModals";

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

  return (
    <StyleDepartmentCard>
      <div className="left-data">
        <h4 className="title-department">{department.name}</h4>
        <p className="description-department">{department.description}</p>
        <p className="company-name">Company name</p>
      </div>

      <div className="right-data">
        <span className="view">
          <img
            src=""
            alt="img-view"
            onClick={() =>
              activateModal(modalDepartmentView, setModalDepartmentView)
            }
          />
        </span>
        <span className="edit-department">
          <img
            src=""
            alt="edit"
            onClick={
              () => activateModal(modalDepartmentEdit, setModalDepartmentEdit)
              //Chamar função que faz request, passar id do departamento
              // dentro da função de request, adicionar a função activatemodal
            }
          />
        </span>
        <span className="remove-department">
          <img
            src=""
            alt="remove"
            onClick={() =>
              activateModal(modalDepartmentRemove, setModalDepartmentRemove)
            }
          />
        </span>
      </div>
    </StyleDepartmentCard>
  );
};
