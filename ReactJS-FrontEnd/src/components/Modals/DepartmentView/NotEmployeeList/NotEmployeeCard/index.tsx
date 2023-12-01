import { useContext } from "react";
import { StyleNotEmployeeCard } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";
import { ModalContext } from "../../../../../context/ContextModals";

export const NotEmployeeCard = ({ userData }: any) => {
  const { modalUserEmployeeRemove, setModalUserEmployeeRemove, activateModal } =
    useContext(ModalContext);
  const { companies } = useContext(CompanyContext);
  return (
    <StyleNotEmployeeCard>
      <div className="user-data">
        {userData.id}
        <h3 className="user-name">{userData.name}</h3>
        {companies.map((company: any) =>
          company.id === userData.company_id ? (
            <span className="user-name" key={company.id}>
              {company.name}
            </span>
          ) : null
        )}
      </div>
      <button
        className="btn-dismiss-user"
        onClick={() =>
          activateModal(
            modalUserEmployeeRemove,
            setModalUserEmployeeRemove,
            userData
          )
        }
      >
        Desligar
      </button>
    </StyleNotEmployeeCard>
  );
};
