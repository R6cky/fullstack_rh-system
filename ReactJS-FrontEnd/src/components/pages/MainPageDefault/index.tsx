import { ListOfCompanies } from "./ListOfCompanies"
import { StyleMainPageDefault} from "./style"

export const MainPageDefault = () => {
    return (
            <StyleMainPageDefault>
                <header className="header-default-page">
                <div className="company-name">RH system</div>
                <div className="buttons-right-area">
                    <button className="login-button">Login</button>
                    <button className="register-button">Cadastro</button>
                </div>
                </header>
                <div className="container-data">
                    <div className="container-data-left">
                        <img src="" alt="Imagem aqui" />
                    </div>
                    <div className="container-data-right">
                    <select name="" id="">
                        <option value="">Categoria 1</option>
                        <option value="">Categoria 2</option>
                    </select>
                    <h3>Lista de empresas</h3>
                        <ListOfCompanies/>
                    </div>
                </div>
            </StyleMainPageDefault>
    )
}