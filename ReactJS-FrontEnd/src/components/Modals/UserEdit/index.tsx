import { useContext } from "react";
import { StyleUserEdit } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const UserEdit = () => {
  const { modalUserEdit, setModalUserEdit, activateModal } =
    useContext(ModalContext);
  return (
    <StyleUserEdit>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalUserEdit, setModalUserEdit);
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-create">Editar Usuário</h2>
        <form
          className="form-user-edit"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="nome do usuário (dado anterior)" />
          <input type="email" placeholder="email (dado anterior)" id="" />

          <button className="btn-user-edit">Salvar</button>
        </form>
      </div>
    </StyleUserEdit>
  );
};
