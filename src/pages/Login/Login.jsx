import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

import { Context } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    passwordUser: "",
  });

  const { handleLogin, isCredentialInvalid } = useContext(Context);

  const { email, passwordUser } = loginCredentials;

  const handleFieldChange = ({ target: { value, name } }) => {
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.notSignedUpContainer}>
        <Link to="/cadastrar">
          Ainda não é um membro ? Clique para se cadastrar
        </Link>
      </div>
    </div>
  );
};

export default Login;
