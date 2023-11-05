import { StyleUserEdit } from "./style";

export const UserEdit = () => {
  return (
    <StyleUserEdit>
      <div className="form-area">
        <h2 className="title-department-create">Editar Usuário</h2>
        <form
          className="form-user-edit"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="nome do usuário (dado anterior)" />
          <input type="email" placeholder="email (dado anterior)" id="" />

          <button className="btn-user-edit">Salvar</button>
        </form>
      </div>
    </StyleUserEdit>
  );
};
