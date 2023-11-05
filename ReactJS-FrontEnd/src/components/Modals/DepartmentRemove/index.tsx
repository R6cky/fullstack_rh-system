import { StyleDepartmentRemove } from "./style";

export const DepartmentRemove = () => {
  return (
    <StyleDepartmentRemove>
      <div className="data-area">
        <h3 className="title-deprtment-remove">
          Deseja realmente remover o NomeDoDepartamento e demitir seus
          funcionários?
        </h3>
        <button className="btn-remove">Remover</button>
      </div>
    </StyleDepartmentRemove>
  );
};
