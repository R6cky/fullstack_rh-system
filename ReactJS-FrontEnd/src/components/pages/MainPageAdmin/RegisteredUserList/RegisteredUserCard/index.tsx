import { useContext } from "react";
import { StyleRegisteredUserCard } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";
import { ModalContext } from "../../../../../context/ContextModals";
import { iCompanies } from "../../../../../interfaces/interfacesContextCompanies";

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
          <img
            src=""
            alt="edit-user"
            onClick={() => activateModal(modalUserEdit, setModalUserEdit, user)}
          />
        </span>
        <span className="remove-user">
          <img
            src=""
            alt="remove-user"
            onClick={() =>
              activateModal(modalUserDelete, setModalUserDelete, user)
            }
          />
        </span>
      </div>
    </StyleRegisteredUserCard>
  );
};
