import { useContext } from "react";
import { StyleDepartmentCreate } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const DepartmentCreate = () => {
  const { activateModal, setModalDepartmentCreate, modalDepartmentCreate } =
    useContext(ModalContext);

  return (
    <StyleDepartmentCreate>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(
                modalDepartmentCreate,
                setModalDepartmentCreate
              );
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-create">Criar departamento</h2>
        <form
          className="form-department-create"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="nome do departamento" />
          <input type="text" name="" placeholder="descrição" id="" />
          <div className="company-select">
            <select name="" id="">
              <option value="">Selecionar empresa</option>
              <option value="">Empresa</option>
              <option value="">Empresa</option>
            </select>
          </div>
          <button className="btn-department-create">Criar</button>
        </form>
      </div>
    </StyleDepartmentCreate>
  );
};
