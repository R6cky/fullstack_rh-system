import { useContext, useState } from "react";
import { StyleUserEdit } from "./style";
import { ModalContext } from "../../../context/ContextModals";

export const UserEdit = ({ userData }: any) => {
  const { modalUserEdit, setModalUserEdit, activateModal, userEdit } =
    useContext(ModalContext);

  const [data, setData] = useState({
    name: "",
    email: "",
  });

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
          onSubmit={(e) => userEdit(e, data, userData.id)}
        >
          <input
            type="text"
            placeholder="nome do usuário (dado anterior)"
            onChange={(e) =>
              setData({
                name: e.target.value,
                email: userData.email,
              })
            }
          />
          <input
            type="email"
            placeholder="email (dado anterior)"
            id=""
            onChange={(e) =>
              setData({
                name: data.name,
                email: e.target.value,
              })
            }
          />

          <button className="btn-user-edit">Salvar</button>
        </form>
      </div>
    </StyleUserEdit>
  );
};
