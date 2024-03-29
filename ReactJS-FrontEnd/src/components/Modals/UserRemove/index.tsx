import { useContext } from "react";
import { StyleUserRemove } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const RemoveUser = (): JSX.Element => {
  const {
    activateModal,
    modalUserDelete,
    setModalUserDelete,
    dataRequest,
    userRemove,
  } = useContext(ModalContext);
  return (
    <StyleUserRemove>
      <div className="data-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalUserDelete, setModalUserDelete);
            }}
          >
            X
          </span>
        </div>
        <h3 className="title-user-remove">
          Deseja realmente remover Nome do Usuário?
        </h3>
        <button
          className="btn-remove"
          onClick={(e) => userRemove(e, dataRequest.id)}
        >
          Remover
        </button>
      </div>
    </StyleUserRemove>
  );
};
