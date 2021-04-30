import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

import { Context } from "../../context/AuthContext/AuthContext";
import { LoadingSpinner, Input } from "../../components/index";
import {
  padlockIcon,
  emailPureIcon,
} from "../../resources/imgs/utilityIcons/index";

import "./Input.scss";
import "./InputField.scss";
import InputField from "./InputField";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    passwordUser: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin, isCredentialInvalid } = useContext(Context);

  const { email, passwordUser } = loginCredentials;

  const handleFieldChange = ({ target: { value, name } }) => {
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleLogin} method="POST">
        <Input htmlFor="email" title="Email" className="inputContainerLogin">
          <InputField
            handleFieldChange={handleFieldChange}
            classes={{
              wrapperContainer: "IFcontainer",
              logoContainer: "IFInputLogoContainer",
              logo: "IFInputLogo",
              input: "IFinputClassName",
            }}
            inputData={{
              name: "email",
              type: "text",
              value: email,
            }}
            logoData={{
              srcImg: emailPureIcon,
              alt: "Email",
            }}
          />
        </Input>
        <Input
          htmlFor="passwordUser"
          title="Senha"
          className="inputContainerLogin"
        >
          <InputField
            handleFieldChange={handleFieldChange}
            classes={{
              wrapperContainer: "IFcontainer",
              logoContainer: "IFInputLogoContainer",
              logo: "IFInputLogo",
              input: "IFinputClassName",
            }}
            inputData={{
              name: "passwordUser",
              type: "password",
              value: passwordUser,
            }}
            logoData={{
              srcImg: padlockIcon,
              alt: "Senha",
            }}
          />
        </Input>

        {isCredentialInvalid && (
          <p className={styles.loginErrorMessage}>Credenciais inválidas</p>
        )}

        <input type="submit" value="Login" onClick={() => setIsLoading(true)} />

        <LoadingSpinner isLoading={isLoading && !isCredentialInvalid} />
      </form>
      <div className={styles.extraRoutesContainer}>
        <Link to="/cadastrar">
          Ainda não é um membro ? Clique para se cadastrar
        </Link>
      </div>
      <div className={styles.extraRoutesContainer}>
        <Link to="/recuperarAcesso/requisicao">
          Esqueceu a senha? Clique para recupera-la
        </Link>
      </div>
    </div>
  );
};

export default Login;
