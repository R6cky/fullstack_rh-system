import { useContext } from "react";
import { ModalContext } from "../../../context/ContextModals";
import { StyleDepartmentEdit } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface iDepartmentEdit {
  id: string;
  description: string;
}

const schema = yup
  .object({
    description: yup
      .string()
      .required("Campo obrigatório")
      .min(10, "Deve conter no mínimo 10 caracteres"),
  })
  .required();
export const DepartmentEdit = (): JSX.Element => {
  const {
    activateModal,
    setModalDepartmentEdit,
    modalDepartmentEdit,
    departmentEdit,
    dataRequest,
  } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: iDepartmentEdit): void => {
    const id: string = dataRequest.id;
    departmentEdit(id, data);
  };

  return (
    <StyleDepartmentEdit>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalDepartmentEdit, setModalDepartmentEdit);
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-edit">Editar departamento</h2>
        <form
          className="form-department-create"
          onSubmit={handleSubmit(submit)}
        >
          <div className="input-area">
            <input
              type="text"
              placeholder="Editar  (valores da descrição anterior)"
              {...register("description")}
            />
            <span className="message-required">
              {errors.description?.message}
            </span>
          </div>
          <button className="btn-department-create">Editar</button>
        </form>
      </div>
    </StyleDepartmentEdit>
  );
};
