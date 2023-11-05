import { StyleDepartmentCreate } from "./style";

export const DepartmentCreate = () => {
  return (
    <StyleDepartmentCreate>
      <div className="form-area">
        <h2 className="title-department-create">Criar departamento</h2>
        <form
          className="form-department-create"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="nome do departamento" />
          <input type="text" name="" placeholder="descrição" id="" />
          <div className="company-select">
            <select name="" id="">
              <option value="">Selecionar empresa</option>
              <option value="">Empresa</option>
              <option value="">Empresa</option>
            </select>
          </div>
          <button className="btn-department-create">Criar</button>
        </form>
      </div>
    </StyleDepartmentCreate>
  );
};
