import { Link } from "react-router-dom";
import { Footer } from "../../Footer";
import { DepartmentList } from "./DepartmentList";
import { RegisteredUserlist } from "./RegisteredUserList";
import { StyleMainPageAdmin } from "./style";
import { CompanyContext } from "../../../context/ContextCompanies";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/ContextRegisteredusers";
import { ModalContext } from "../../../context/ContextModals";
import { DepartmentCreate } from "../../Modals/DepartmentCreate";

export const MainPageAdmin = () => {
  const { getCompanies, companies, getDepartmentByCompany } =
    useContext(CompanyContext);
  const { getRegisteredUser } = useContext(UserContext);
  const { modalDepartmentCreate, setModalDepartmentCreate, activateModal } =
    useContext(ModalContext);

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
            <span
              className="btn-create-department"
              onClick={() => {
                return activateModal(
                  modalDepartmentCreate,
                  setModalDepartmentCreate
                );
              }}
            >
              Criar
            </span>
          </div>
          <DepartmentList />
        </div>
        <div className="registered-user-list">
          <RegisteredUserlist />
        </div>
      </div>
      <Footer />
      {modalDepartmentCreate ? <DepartmentCreate /> : null}
    </StyleMainPageAdmin>
  );
};
