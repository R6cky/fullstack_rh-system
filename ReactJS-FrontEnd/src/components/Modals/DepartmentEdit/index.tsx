import { StyleDepartmentEdit } from "./style";

export const DepartmentEdit = () => {
  return (
    <StyleDepartmentEdit>
      <div className="form-area">
        <h2 className="title-department-edit">Editar departamento</h2>
        <form
          className="form-department-create"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Editar  (valores da descrição anterior)"
          />

          <button className="btn-department-create">Criar</button>
        </form>
      </div>
    </StyleDepartmentEdit>
  );
};
