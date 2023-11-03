import { StyleRegisteredUserCard } from "./style";

export const RegisteredUserCard = () => {
  return (
    <StyleRegisteredUserCard>
      <div className="left-data">
        <h4 className="user-name">Nome do funcionario</h4>
        <span className="company-name">Nome da empresa</span>
      </div>
      <div className="right-data">
        <span className="edit-user">
          <img src="" alt="edit-user" />
        </span>
        <span className="remove-user">
          <img src="" alt="remove-user" />
        </span>
      </div>
    </StyleRegisteredUserCard>
  );
};
