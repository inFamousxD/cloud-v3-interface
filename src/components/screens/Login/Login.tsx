import React from "react";
import {LoginFormStyled, LoginStyled} from "./Login.styles";


const Login: React.FC = () => {
    return (
        <LoginStyled>
            <LoginFormStyled>
                <div className={"title"}>Login</div>
                <input placeholder={"username"}></input>
                <input placeholder={"password"}></input>
                <div style={{ flex: "auto" }}></div>
                <div>
                    <button>Login</button>
                </div>
                <div className={"create"}>Create an account</div>
            </LoginFormStyled>
        </LoginStyled>
    )
}

export default Login;