import { useContext } from "react";
import { StyleEmployeeRemove } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const EmployeeRemove = () => {
  const {
    modalUserEmployeeRemove,
    setModalUserEmployeeRemove,
    activateModal,
    dataRequest,
  } = useContext(ModalContext);
  return (
    <StyleEmployeeRemove>
      <div className="data-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(
                modalUserEmployeeRemove,
                setModalUserEmployeeRemove
              );
            }}
          >
            X
          </span>
        </div>
        <h3 className="title-employee-remove">
          Deseja realmente desligar {dataRequest.name}?
        </h3>
        <button
          className="btn-remove"
          // onClick={(e) => employeeDisconnect(e, dataRequest.id)}
        >
          Remover
        </button>
      </div>
    </StyleEmployeeRemove>
  );
};
