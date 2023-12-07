import { useContext } from "react";
import { StyleCardOfCompanies } from "./style";
import { CompanyContext } from "../../../../../context/ContextCompanies";

export const CardOfCompanies = ({ company }: any) => {
  const { sectors } = useContext(CompanyContext);
  return (
    <StyleCardOfCompanies>
      <h4>{company.name}</h4>
      {sectors.map((sector: any) =>
        sector.id === company.category_id ? (
          <h5 key={sector.id}>{sector.name}</h5>
        ) : (
          false
        )
      )}
    </StyleCardOfCompanies>
  );
};
