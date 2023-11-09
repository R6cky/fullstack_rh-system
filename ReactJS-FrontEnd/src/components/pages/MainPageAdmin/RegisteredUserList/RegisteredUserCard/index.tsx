import { useContext } from "react";
import { StyleRegisteredUserCard } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";

export const RegisteredUserCard = ({ user }: any) => {
  const { companies } = useContext(CompanyContext);
  let companyName: String[] = [];

  companies.forEach((element: any) => {
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
          <img src="" alt="edit-user" />
        </span>
        <span className="remove-user">
          <img src="" alt="remove-user" />
        </span>
      </div>
    </StyleRegisteredUserCard>
  );
};
