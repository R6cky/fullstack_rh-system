import { useContext, useEffect } from "react";
import { CardOfCompanies } from "./CardOfCompanies";
import { StyleListOfCompanies } from "./style";
import { CompanyContext } from "../../../../context/ContextCompanies";

export const ListOfCompanies = ({ sector }: any) => {
  const { companies, getCompanies } = useContext(CompanyContext);

  useEffect(function () {
    getCompanies();
  }, []);

  return (
    <StyleListOfCompanies>
      {companies.map((company: any) =>
        company.category_id === sector ? (
          <CardOfCompanies key={company.id} company={company} />
        ) : (
          false
        )
      )}
    </StyleListOfCompanies>
  );
};
