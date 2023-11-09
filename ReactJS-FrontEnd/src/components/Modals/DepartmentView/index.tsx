import { useContext } from "react";
import { NotEmployeeList } from "./NotEmployeeList";
import { StyleDepartmentView } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const DepartmentView = () => {
  const { activateModal, modalDepartmentView, setModalDepartmentView } =
    useContext(ModalContext);
  return (
    <StyleDepartmentView>
      <div className="data-modal-view">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalDepartmentView, setModalDepartmentView);
            }}
          >
            X
          </span>
        </div>
        <div className="header-modal">
          <h3 className="department-name">Nome do departamento</h3>
          <span className="department-description">
            Descrição do departamento
          </span>
          <span className="department-owner">Nome da empresa</span>
        </div>

        <div className="select-area">
          <select name="" id="">
            <option value="">Selecionar usuário</option>
            <option value="">Usuário 1</option>
            <option value="">Usuário 2</option>
          </select>
          <button className="btn-hire">Contratar</button>
        </div>
      </div>
      <NotEmployeeList />
    </StyleDepartmentView>
  );
};
