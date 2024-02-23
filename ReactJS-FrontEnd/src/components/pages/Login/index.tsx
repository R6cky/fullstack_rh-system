import { Link, useNavigate } from "react-router-dom";
import { StyleLogin } from "./style";
import { Footer } from "../../Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/ContextUsers";
import { AuthContext } from "../../../context/ContextAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { iLogin } from "../../../interfaces/interfacesUsers";

const schema: any = yup
  .object({
    email: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "Deve conter no mínimo 5 caracteres")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(4, "Deve conter no mínimo 4 caracteres"),
  })
  .required();

export const Login = (): JSX.Element => {
  const { userLogin } = useContext(UserContext);
  const { userIsAuthenticated, isAdmin } = useContext(AuthContext);
  const navigate: any = useNavigate();

  useEffect(() => {
    if (userIsAuthenticated() && isAdmin() === "true") {
      navigate("/homeAdmin");
    }

    if (userIsAuthenticated() && isAdmin() === "false") {
      navigate("/homeUser");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = (data: iLogin | any): void => {
    userLogin(data);
  };

  return (
    <StyleLogin>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="login-button">
            <Link className="redirect-link" to={"/"}>
              Home
            </Link>
          </button>
          <button className="register-button">
            <Link className="redirect-link" to={"/register"}>
              Cadastro
            </Link>
          </button>
        </div>
      </header>
      <div className="login-container">
        <h3 className="title-login">Login</h3>
        <p className="description-login">
          Preencha os campos para realizar o login
        </p>
        <div className="input-area">
          <form onSubmit={handleSubmit(submit)}>
            <div className="input-area-input">
              <div className="input-email-area">
                <input
                  type="text"
                  placeholder="Seu e-mail"
                  {...register("email")}
                />
                <span className="message-required">
                  {errors.email?.message}
                </span>
              </div>

              <div className="input-password-area">
                <input
                  placeholder="senha"
                  type="password"
                  {...register("password")}
                />
                <span className="message-required">
                  {errors.password?.message}
                </span>
              </div>
            </div>

            <div className="input-area-button">
              <button>Login</button>
              <span className="or">Ou</span>
              <button>
                <Link className="redirect-link" to={"/register"}>
                  Cadastre-se
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </StyleLogin>
  );
};
