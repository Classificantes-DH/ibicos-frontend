import React, { useState, useContext } from "react";
import styles from "./Login.module.scss";

import { Context } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    passwordUser: "",
  });

  const { isUserAuthenticated, handleLogin, isCredentialInvalid } = useContext(
    Context
  );

  const { email, passwordUser } = loginCredentials;

  const handleFieldChange = ({ target: { value, name } }) => {
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <div className={styles.container}>
      <h1>{isUserAuthenticated}</h1>

      <form className={styles.loginForm} onSubmit={handleLogin} method="POST">
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="passwordUser">
          <p>Senha</p>
          <input
            type="password"
            name="passwordUser"
            value={passwordUser}
            onChange={handleFieldChange}
          />
        </label>
        {isCredentialInvalid && (
          <p className={styles.loginErrorMessage}>Credenciais inválidas</p>
        )}

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
