import { Link } from "react-router-dom";
import { ListOfCompanies } from "./ListOfCompanies";
import { StyleHome } from "./style";
import { Footer } from "../../Footer";

export const Home = () => {
  return (
    <StyleHome>
      <header className="header-default-page">
        <div className="company-name">RH system</div>
        <div className="buttons-right-area">
          <button className="login-button">
            <Link className="redirect-link" to={"/login"}>
              Login
            </Link>
          </button>
          <button className="register-button">
            <Link className="redirect-link" to={"/register"}>
              Cadastro
            </Link>
          </button>
        </div>
      </header>
      <div className="container-data">
        <div className="container-data-left">
          <img src="" alt="Imagem aqui" />
        </div>
        <div className="container-data-right">
          <select name="" id="">
            <option value="">Selecione o setor</option>
            <option value="">Categoria 2</option>
          </select>
          <h3>Lista de empresas</h3>
          <ListOfCompanies />
        </div>
      </div>
      <Footer />
    </StyleHome>
  );
};
