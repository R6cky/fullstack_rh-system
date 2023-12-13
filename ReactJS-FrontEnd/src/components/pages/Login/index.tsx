import { Link, useNavigate } from "react-router-dom";
import { StyleLogin } from "./style";
import { Footer } from "../../Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/ContextUsers";
import { AuthContext } from "../../../context/ContextAuth";

export const Login = () => {
  const { userLogin } = useContext(UserContext);
  const { userIsAuthenticated, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (userIsAuthenticated() && isAdmin() === "true") {
      navigate("/homeAdmin");
    }

    if (userIsAuthenticated() && isAdmin() === "false") {
      navigate("/homeUser");
    }
  }, []);

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
          <form action="" onSubmit={(e) => userLogin(e, userData)}>
            <div className="input-area-input">
              <input
                type="text"
                placeholder="Seu e-mail"
                onChange={(e) =>
                  setUserData({
                    email: e.target.value,
                    password: userData.password,
                  })
                }
              />
              <input
                type="password"
                placeholder="Sua senha"
                onChange={(e) =>
                  setUserData({
                    email: userData.email,
                    password: e.target.value,
                  })
                }
              />
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
