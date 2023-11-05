import { Footer } from "../../Footer";
import { EmployeeList } from "./EmployeeList";
import { StyleMainPageUser } from "./style";
import { Link } from "react-router-dom";

export const MainPageUser = () => {
  return (
    <StyleMainPageUser>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="logout-button">
            <Link className="redirect-link" to={"/"}>
              Logout
            </Link>
          </button>
        </div>
      </header>

      <div className="user-page-container">
        <div className="userdata-area">
          <div className="user-data">
            <h4 className="user-name">Username</h4>
            <span className="user-email">user@mail.com</span>
          </div>
        </div>

        <div className="data-employees">
          <div className="data-employees-header">
            <h4 className="company-name">
              Nome da compania - NomeDoDepartamento
            </h4>
          </div>

          <EmployeeList />
        </div>
      </div>
      <Footer />
    </StyleMainPageUser>
  );
};
