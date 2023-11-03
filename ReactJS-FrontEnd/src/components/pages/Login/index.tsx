import { StyleLogin } from "./style"

export const Login = () => {
    return (
        <>
            <StyleLogin>
            <header className="header-default-page">
                <div className="company-name">RH system</div>
                <div className="buttons-right-area">
                    <button className="login-button">Home</button>
                    <button className="register-button">Cadastro</button>
                </div>
            </header>
            <div className="login-container"> 
                    <h3 className="title-login">Login</h3>
                    <p className="description-login">Preencha os campos para realizar o login</p>
                    <div className="input-area">
                        <form action="" >
                            <div className="input-area-input">
                                <input type="text" placeholder="Seu e-mail" />
                                <input type="text" placeholder="Sua senha" />
                            </div>

                            <div className="input-area-button">
                                <button>Login</button>
                                <p>Ou</p>
                                <button>Cadastre-se</button>
                            </div>
                        </form>
                    </div> 
            </div>
                
            </StyleLogin>
        </>
    )
}