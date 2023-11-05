import { StyleUserRemove } from "./style";

export const RemoveUser = () => {
  return (
    <StyleUserRemove>
      <div className="data-area">
        <h3 className="title-user-remove">
          Deseja realmente remover Nome do Usuário?
        </h3>
        <button className="btn-remove">Remover</button>
      </div>
    </StyleUserRemove>
  );
};
