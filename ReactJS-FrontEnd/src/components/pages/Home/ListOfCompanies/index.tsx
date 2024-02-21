import { useContext, useEffect } from "react";
import { CardOfCompanies } from "./CardOfCompanies";
import { StyleListOfCompanies } from "./style";
import { CompanyContext } from "../../../../context/ContextCompanies";
import { iCompanies } from "../../../../interfaces/interfacesContextCompanies";

export const ListOfCompanies = ({ sector }: any): JSX.Element => {
  const { companies, getCompanies }: any = useContext(CompanyContext);

  useEffect(function () {
    getCompanies();
  }, []);

  return (
    <StyleListOfCompanies>
      {companies.map((company: iCompanies) =>
        company.category_id === sector ? (
          <CardOfCompanies key={company.id} company={company} />
        ) : (
          false
        )
      )}
    </StyleListOfCompanies>
  );
};
