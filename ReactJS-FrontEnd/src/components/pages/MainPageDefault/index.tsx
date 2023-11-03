import { ListOfCompanies } from "./ListOfCompanies"
import { StyleMainPageDefault} from "./style"

export const MainPageDefault = () => {
    return (
            <StyleMainPageDefault>
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