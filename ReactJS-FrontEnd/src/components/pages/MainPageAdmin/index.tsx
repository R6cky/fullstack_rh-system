import { Footer } from "../../Footer";
import { DepartmentList } from "./DepartmentList";
import { RegisteredUserlist } from "./RegisteredUserList";
import { StyleMainPageAdmin } from "./style";

export const MainPageAdmin = () => {
  return (
    <StyleMainPageAdmin>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="login-button">Logout</button>
        </div>
      </header>

      <div className="admin-page-container">
        <div className="select-company">
          <select name="" id="">
            <option value="">Selecionar empresa</option>
            <option value="">Empresa 1</option>
            <option value="">Empresa 2</option>
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
