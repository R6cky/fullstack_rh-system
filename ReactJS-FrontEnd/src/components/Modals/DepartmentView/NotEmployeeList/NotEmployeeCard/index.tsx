import { StyleNotEmployeeCard } from "./style";

export const NotEmployeeCard = () => {
  return (
    <StyleNotEmployeeCard>
      <div className="user-data">
        <h3 className="user-name">username</h3>
        <span className="user-name">Company name</span>
      </div>
      <button className="btn-dismiss-user">Desligar</button>
    </StyleNotEmployeeCard>
  );
};
