import { useContext } from "react";
import { StyleDepartmentRemove } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const DepartmentRemove = () => {
  const { modalDepartmentRemove, setModalDepartmentRemove, activateModal } =
    useContext(ModalContext);
  return (
    <StyleDepartmentRemove>
      <div className="data-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(
                modalDepartmentRemove,
                setModalDepartmentRemove
              );
            }}
          >
            X
          </span>
        </div>
        <h3 className="title-deprtment-remove">
          Deseja realmente remover o NomeDoDepartamento e demitir seus
          funcionários?
        </h3>
        <button className="btn-remove">Remover</button>
      </div>
    </StyleDepartmentRemove>
  );
};
