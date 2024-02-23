import { useContext, useState } from "react";
import { StyleUserEdit } from "./style";
import { ModalContext } from "../../../context/ContextModals";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type tUserEdit = {
  name: string;
  email: string;
};

const schema = yup
  .object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "Deve conter no mínimo 5 caracteres"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um email válido"),
  })
  .required();

export const UserEdit = () => {
  const {
    modalUserEdit,
    setModalUserEdit,
    activateModal,
    userEdit,
    dataRequest,
  } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: tUserEdit) => {
    userEdit(dataRequest.id, data);
  };

  return (
    <StyleUserEdit>
      <div className="form-area">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalUserEdit, setModalUserEdit);
            }}
          >
            X
          </span>
        </div>
        <h2 className="title-department-create">Editar Usuário</h2>
        <form className="form-user-edit" onSubmit={handleSubmit(submit)}>
          <div className="input-area">
            <input
              type="text"
              placeholder="nome do usuário (dado anterior)"
              {...register("name")}
            />
            <span className="message-required">{errors.name?.message}</span>
            <input
              type="email"
              placeholder="email (dado anterior)"
              id=""
              {...register("email")}
            />
            <span className="message-required">{errors.email?.message}</span>
          </div>
          <button className="btn-user-edit">Salvar</button>
        </form>
      </div>
    </StyleUserEdit>
  );
};
