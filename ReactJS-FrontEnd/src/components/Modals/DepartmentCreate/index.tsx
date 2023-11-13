import { useContext, useState } from "react";
import { StyleDepartmentCreate } from "./style";
import { ModalContext } from "../../../context/ContextModals";
import { CompanyContext } from "../../../context/ContextCompanies";

export const DepartmentCreate = () => {
  const {
    activateModal,
    setModalDepartmentCreate,
    modalDepartmentCreate,
    departmentCreate,
  } = useContext(ModalContext);
  const { companies } = useContext(CompanyContext);

  const [data, setData] = useState({
    name: "",
    description: "",
    company_id: "",
  });

  return (
    <StyleDepartmentCreate>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(
                modalDepartmentCreate,
                setModalDepartmentCreate
              );
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-create">Criar departamento</h2>
        <form
          className="form-department-create"
          action=""
          onSubmit={(e) => departmentCreate(e, data)}
        >
          <input
            type="text"
            placeholder="nome do departamento"
            onChange={(e) =>
              setData({
                name: e.target.value,
                description: data.description,
                company_id: data.company_id,
              })
            }
          />
          <input
            type="text"
            name=""
            placeholder="descrição"
            id=""
            onChange={(e) =>
              setData({
                name: data.name,
                description: e.target.value,
                company_id: data.company_id,
              })
            }
          />
          <div className="company-select">
            <select
              name=""
              id=""
              onChange={(e) =>
                setData({
                  name: data.name,
                  description: data.description,
                  company_id: e.target.value,
                })
              }
            >
              <option value="Selecionar empresa">Selecionar empresa</option>
              {companies.map((company: any) => (
                <option value={company.id} key={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn-department-create">Criar</button>
        </form>
      </div>
    </StyleDepartmentCreate>
  );
};
