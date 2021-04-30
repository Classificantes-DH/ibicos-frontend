import React from "react";
import styles from "./Login.module.scss";

import AdditionalOptions from "./AdditionalOptions";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className={styles.container}>
      <FormLogin />

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
