import { Link } from "react-router-dom";
import { ListOfCompanies } from "./ListOfCompanies";
import { StyleHome } from "./style";
import { Footer } from "../../Footer";
import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../../context/ContextCompanies";
import ImgHome from "../../../assets/main-home.jpg";
import { iCategories } from "../../../interfaces/interfacesContextCompanies";
//import { LoadContext } from "../../../context/ContextLoading";

export const Home = (): JSX.Element => {
  const { sectors, getSectors }: any = useContext(CompanyContext);
  //const { loading }: any = useContext(LoadContext);

  const [dataSector, setDataSector] = useState("" as string);

  useEffect(() => {
    getSectors();
  }, []);

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
          <img src={ImgHome} width={550} height={580} alt="Imagem aqui" />
        </div>
        <div className="container-data-right">
          <select name="" id="" onChange={(e) => setDataSector(e.target.value)}>
            <option value="Selecione o setor">Selecione o setor</option>;
            {sectors.map((sector: iCategories) => {
              return (
                <option value={sector.id} key={sector.id}>
                  {sector.name}
                </option>
              );
            })}
          </select>
          <h3 className="list-title">Lista de empresas</h3>
          {sectors.length > 0 ? (
            <ListOfCompanies sector={dataSector} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </StyleHome>
  );
};
