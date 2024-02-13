import { Link } from "react-router-dom";
import { StyleRegister } from "./style";
import { Footer } from "../../Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/ContextUsers";
import { ErrorMessage } from "@hookform/error-message";

export const Register = () => {
  const { userRegister } = useContext(UserContext);

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  } as any);

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
          <form action="" onSubmit={(e) => userRegister(e, userData)}>
            <div className="input-area-input">
              <input
                type="text"
                placeholder="Seu nome"
                onChange={(e) =>
                  setuserData({
                    name: e.target.value,
                    email: userData.email,
                    password: userData.passsword,
                  })
                }
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                onChange={(e) =>
                  setuserData({
                    name: userData.name,
                    email: e.target.value,
                    password: userData.passsword,
                  })
                }
              />
              <input
                type="password"
                placeholder="Sua senha"
                onChange={(e) =>
                  setuserData({
                    name: userData.name,
                    email: userData.email,
                    password: e.target.value,
                  })
                }
              />
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
