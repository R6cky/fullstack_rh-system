import { Link } from "react-router-dom";
import { StyleRegister } from "./style";
import { Footer } from "../../Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/ContextUsers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type tRegister = {
  name: string;
  email: string;
  password: string;
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
      .min(5, "Deve conter no mínimo 5 caracteres")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(4, "Deve conter no mínimo 8 caracteres"),
  })
  .required();

export const Register = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: tRegister) => {
    userRegister(data);
    console.log(data);
  };

  return (
    <StyleRegister>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="login-button">
            <Link className="redirect-link" to={"/"}>
              Home
            </Link>
          </button>
          <button className="register-button">
            <Link className="redirect-link" to={"/login"}>
              Login
            </Link>
          </button>
        </div>
      </header>

      <div className="register-container">
        <h3 className="title-register">Cadastre-se</h3>

        <div className="input-area">
          <form onSubmit={handleSubmit(submit)}>
            <div className="input-area-input">
              <input type="text" placeholder="Seu nome" {...register("name")} />
              <span className="message-required">{errors.name?.message}</span>
              <input
                type="text"
                placeholder="Seu e-mail"
                {...register("email")}
              />
              <span className="message-required">{errors.email?.message}</span>
              <input
                type="password"
                placeholder="Sua senha"
                {...register("password")}
              />
              <span className="message-required">
                {errors.password?.message}
              </span>
            </div>
            <hr />
            <div className="input-area-button">
              <button>Cadastrar</button>
              <button onClick={(e) => e.preventDefault()}>Retornar</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </StyleRegister>
  );
};
