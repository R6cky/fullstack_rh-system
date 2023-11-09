import { useContext } from "react";
import { StyleUserRemove } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const RemoveUser = () => {
  const { activateModal, modalUserDelete, setModalUserDelete } =
    useContext(ModalContext);
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
        <button className="btn-remove">Remover</button>
      </div>
    </StyleUserRemove>
  );
};
