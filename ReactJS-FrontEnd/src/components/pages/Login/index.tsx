import { Link } from "react-router-dom";
import { StyleLogin } from "./style";
import { Footer } from "../../Footer";

export const Login = () => {
  return (
    <>
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
            <form action="">
              <div className="input-area-input">
                <input type="text" placeholder="Seu e-mail" />
                <input type="text" placeholder="Sua senha" />
              </div>

              <div className="input-area-button">
                <button>Login</button>
                <p>Ou</p>
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
    </>
  );
};
