import React from "react";

import { LoadingSpinner, Input, Button } from "../../index";
import {
  padlockIcon,
  emailPureIcon,
} from "../../../resources/imgs/utilityIcons/index";

import InputField from "../InputField/InputField";
import LoginError from "../LoginError/LoginError";

import "../Input.scss";
import "../Button.scss";
import styles from "./FormLogin.module.scss";

import useLoginHook from "../../../hooks/useLoginHook";

const FormLogin = () => {
  const {
    isLoading,
    handleLogin,
    loginCredentials,
    isCredentialInvalid,
    handleFieldChange,
    handleLoadingToggle,
  } = useLoginHook();

  const { email, passwordUser } = loginCredentials;

  return (
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
        onClickHandler={handleLoadingToggle}
        containerClassName="btn-container-login"
        buttonClassName="btn-login"
      />

      <LoadingSpinner isLoading={isLoading && !isCredentialInvalid} />
    </form>
  );
};

export default FormLogin;
