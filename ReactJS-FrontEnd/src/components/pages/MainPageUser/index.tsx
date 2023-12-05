import { useContext, useEffect } from "react";
import { Footer } from "../../Footer";
import { EmployeeList } from "./EmployeeList";
import { StyleMainPageUser } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/ContextUsers";
import { CompanyContext } from "../../../context/ContextCompanies";
import { AuthContext } from "../../../context/ContextAuth";

export const MainPageUser = () => {
  const { getDataOfUserLogged, dataOfUserLogged } = useContext(UserContext);
  const { dataDepartmentById, dataCompanyById } = useContext(CompanyContext);
  const { isAdmin, userIsAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getDataOfUserLogged();
  }, []);

  useEffect(() => {
    if (!userIsAuthenticated()) {
      navigate("/login");
    }

    if (userIsAuthenticated() && isAdmin() === "true") {
      navigate("/homeAdmin");
    }

    if (userIsAuthenticated() && isAdmin() === "false") {
      navigate("/homeUser");
    }
  }, []);

  return (
    <StyleMainPageUser>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button
            className="logout-button"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="user-page-container">
        <div className="userdata-area">
          <div className="user-data">
            <h4 className="user-name">{dataOfUserLogged.name}</h4>
            <span className="user-email">{dataOfUserLogged.email}</span>
          </div>
        </div>

        <div className="data-employees">
          <div className="data-employees-header">
            <h4 className="company-name">
              <span className="data-company">{dataCompanyById.name}</span> -
              <span className="data-department">{dataDepartmentById.name}</span>
            </h4>
          </div>

          <EmployeeList />
        </div>
      </div>
      <Footer />
    </StyleMainPageUser>
  );
};
