import { useContext } from "react";
import { StyleDepartmentCreate } from "./style";
import { ModalContext } from "../../../context/ContextModals";
import { CompanyContext } from "../../../context/ContextCompanies";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { iDepartmentCreate } from "../../../interfaces/interfacesModals";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "Deve conter no mínimo 5 caracteres"),
    description: yup
      .string()
      .required("Campo obrigatório")
      .min(10, "Deve conter no mínimo 10 caracteres"),
    company_id: yup.string().required(),
  })
  .required();

export const DepartmentCreate = (): JSX.Element => {
  const {
    activateModal,
    setModalDepartmentCreate,
    modalDepartmentCreate,
    departmentCreate,
  } = useContext(ModalContext);

  const { companies } = useContext(CompanyContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: iDepartmentCreate): void => {
    departmentCreate(data);
  };

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
          onSubmit={handleSubmit(submit)}
        >
          <div className="input-area">
            <input
              type="text"
              placeholder="nome do departamento"
              {...register("name")}
            />
            <span className="message-required">{errors.name?.message}</span>
            <input
              type="text"
              placeholder="descrição"
              id=""
              {...register("description")}
            />
            <span className="message-required">
              {errors.description?.message}
            </span>
          </div>
          <div className="company-select">
            <select id="" {...register("company_id")}>
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
