import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

import { Context } from "../../context/AuthContext/AuthContext";

import { LoadingSpinner } from "../../components/index";

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
