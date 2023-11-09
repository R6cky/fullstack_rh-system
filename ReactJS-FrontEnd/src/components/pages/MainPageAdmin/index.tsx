import { Link } from "react-router-dom";
import { Footer } from "../../Footer";
import { DepartmentList } from "./DepartmentList";
import { RegisteredUserlist } from "./RegisteredUserList";
import { StyleMainPageAdmin } from "./style";
import { CompanyContext } from "../../../context/ContextCompanies";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/ContextRegisteredusers";

export const MainPageAdmin = () => {
  const { getCompanies, companies, getDepartmentByCompany } =
    useContext(CompanyContext);
  const { getRegisteredUser } = useContext(UserContext);

  useEffect(() => {
    getCompanies();
    getRegisteredUser();
  }, []);

  return (
    <StyleMainPageAdmin>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="login-button">
            <Link to={"/"}>Logout</Link>
          </button>
        </div>
      </header>

      <div className="admin-page-container">
        <div className="select-company">
          <select
            name=""
            onChange={(e) => getDepartmentByCompany(e.target.value)}
          >
            <option value="Selecionar empresa">Selecionar empresa</option>
            {companies.map((company: any) => (
              <option value={company.id} key={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <div className="department-list">
          <div className="header-departments">
            <h3 className="title-header-departments">Departamentos</h3>
            <span className="btn-create-department">Criar</span>
          </div>
          <DepartmentList />
        </div>
        <div className="registered-user-list">
          <RegisteredUserlist />
        </div>
      </div>
      <Footer />
    </StyleMainPageAdmin>
  );
};
