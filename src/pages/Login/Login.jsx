import React, { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    passwordUser: "",
  });

  const { email, passwordUser } = loginCredentials;

  const handleSomething = (event) => {
    event.preventDefault();
    console.log("Doing something");
  };

  const handleFieldChange = ({ target: { value, name } }) => {
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return (
    <div className={styles.container}>
      <form action={handleSomething} method="POST" className={styles.loginForm}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
