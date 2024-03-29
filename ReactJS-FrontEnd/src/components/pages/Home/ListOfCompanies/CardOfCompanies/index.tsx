import { useContext } from "react";
import { StyleCardOfCompanies } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";
import { iCategories } from "../../../../../interfaces/interfacesContextCompanies";

export const CardOfCompanies = ({ company }: any): JSX.Element => {
  const { sectors }: any = useContext(CompanyContext);
  return (
    <StyleCardOfCompanies>
      <h4 className="company-name-card">{company.name}</h4>
      {sectors.map((sector: iCategories) =>
        sector.id === company.category_id ? (
          <h5 className="sector-area" key={sector.id}>
            {sector.name}
          </h5>
        ) : (
          false
        )
      )}
    </StyleCardOfCompanies>
  );
};
