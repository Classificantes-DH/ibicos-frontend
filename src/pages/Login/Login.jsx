import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

import { Context } from "../../context/AuthContext/AuthContext";
import { LoadingSpinner, Input, Button } from "../../components/index";
import {
  padlockIcon,
  emailPureIcon,
} from "../../resources/imgs/utilityIcons/index";

import "./Input.scss";
import InputField from "./InputField";
import AdditionalOptions from "./AdditionalOptions";
import LoginError from "./LoginError";
import "./Button.scss";

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
        <Input htmlFor="email" title="Email" className="input-container-login">
          <InputField
            handleFieldChange={handleFieldChange}
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
          className="input-container-login"
        >
          <InputField
            handleFieldChange={handleFieldChange}
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

        <LoginError isCredentialInvalid={isCredentialInvalid} />

        <Button
          type="submit"
          text="Login"
          onClick={() => setIsLoading(true)}
          containerClassName="btn-container-login"
          buttonClassName="btn-login"
        />

        <LoadingSpinner isLoading={isLoading && !isCredentialInvalid} />
      </form>
      <AdditionalOptions
        path="/cadastrar"
        text="Ainda não é um membro ? Clique para se cadastrar"
      />
      <AdditionalOptions
        path="/cadastrar"
        text="Esqueceu a senha? Clique para recupera-la"
      />
    </div>
  );
};

export default Login;
