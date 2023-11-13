import { useContext, useState } from "react";
import { ModalContext } from "../../../context/ContextModals";
import { StyleDepartmentEdit } from "./style";

export const DepartmentEdit = () => {
  const {
    activateModal,
    setModalDepartmentEdit,
    modalDepartmentEdit,
    departmentEdit,
  } = useContext(ModalContext);

  const [data, setData] = useState({
    description: "",
  });

  return (
    <StyleDepartmentEdit>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalDepartmentEdit, setModalDepartmentEdit);
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-edit">Editar departamento</h2>
        <form
          className="form-department-create"
          action=""
          onSubmit={(e) => departmentEdit(e, data)}
        >
          <input
            type="text"
            placeholder="Editar  (valores da descrição anterior)"
            onChange={(e) => setData({ description: e.target.value })}
          />

          <button className="btn-department-create">Criar</button>
        </form>
      </div>
    </StyleDepartmentEdit>
  );
};
