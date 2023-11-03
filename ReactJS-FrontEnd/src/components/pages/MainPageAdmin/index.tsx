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
        <div className="department-list">
          <DepartmentList />
        </div>
        <div className="registered-user-list">
          <RegisteredUserlist />
        </div>
      </div>
    </StyleMainPageAdmin>
  );
};
