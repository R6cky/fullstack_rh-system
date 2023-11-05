import { Link } from "react-router-dom";
import { StyleRegister } from "./style";
import { Footer } from "../../Footer";

export const Register = () => {
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
          <form action="">
            <div className="input-area-input">
              <input type="text" placeholder="Seu nome" />
              <input type="text" placeholder="Seu e-mail" />
              <input type="text" placeholder="Sua senha" />
            </div>

            <div className="input-area-button">
              <button>Cadastrar</button>
              <p>Ou</p>
              <button>Retornar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </StyleRegister>
  );
};
