import { useContext } from "react";
import { StyleRegisteredUserCard } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";
import { ModalContext } from "../../../../../context/ContextModals";
import { iCompanies } from "../../../../../interfaces/interfacesContextCompanies";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const RegisteredUserCard = ({ user }: any): JSX.Element => {
  const { companies } = useContext(CompanyContext);
  const {
    activateModal,
    modalUserEdit,
    setModalUserEdit,
    modalUserDelete,
    setModalUserDelete,
  } = useContext(ModalContext);
  let companyName: String[] = [];

  companies.forEach((element: iCompanies) => {
    if (element.id === user.company_id) {
      companyName.push(element.name);
    }
  });
  return (
    <StyleRegisteredUserCard>
      <div className="left-data">
        <h4 className="user-name">{user.name}</h4>
        {companyName.length === 0 ? (
          <span className="company-name-null">Sem vínculo com empresa </span>
        ) : (
          <span className="company-name">{companyName}</span>
        )}
      </div>
      <div className="right-data">
        <span className="edit-user">
          <FaUserEdit
            className="user-edit-icon"
            title="Editar usuário"
            onClick={() => activateModal(modalUserEdit, setModalUserEdit, user)}
          />
        </span>
        <span className="remove-user">
          <MdDelete
            title="Remove user"
            className="remove-user-icon"
            onClick={() =>
              activateModal(modalUserDelete, setModalUserDelete, user)
            }
          />
        </span>
      </div>
    </StyleRegisteredUserCard>
  );
};
