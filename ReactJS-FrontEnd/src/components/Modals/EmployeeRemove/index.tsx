import { useContext, useEffect, useState } from "react";
import { StyleEmployeeRemove } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const EmployeeRemove = (): JSX.Element => {
  const {
    modalUserEmployeeRemove,
    setModalUserEmployeeRemove,
    activateModal,
    dataRequest,
    employeeDisconnect,
  } = useContext(ModalContext);

  const [data, setData] = useState({} as any);
  useEffect(() => {
    setData(dataRequest);
  }, []);

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
          Deseja realmente desligar {data.name}?
        </h3>
        <button
          className="btn-remove"
          onClick={(e) => employeeDisconnect(e, data.id)}
        >
          Remover
        </button>
      </div>
    </StyleEmployeeRemove>
  );
};
