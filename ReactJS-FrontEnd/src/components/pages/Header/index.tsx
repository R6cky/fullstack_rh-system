import { StyleHeader } from "./style"

export const Header= () => {
    const pageName: string = "Header";
    return (
       
            <StyleHeader>
                <div className="company-name">RH system</div>
                <div className="buttons-right-area">
                    <button className="login-button">Login</button>
                    <button className="register-button">Cadastro</button>
                </div>
            </StyleHeader>
   
    )
}