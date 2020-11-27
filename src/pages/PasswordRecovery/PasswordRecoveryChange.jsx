import React from "react";

import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";
import usePasswordRecoveryChangeHook from "../../hooks/usePasswordRecoveryChangeHook";
import styles from "./PasswordRecovery.module.scss";

const PasswordRecoveryChange = ({ location: { search } }) => {
  const history = useHistory();

  const {
    isRecoveryRequestSuccessfull,
    hasRecoveryRequestErrors,
    newPassword,
    handleInputChange,
    handlePasswordRequestChange,
  } = usePasswordRecoveryChangeHook();

  const params = new URLSearchParams(search);

  const token = params.get("token"); //

  if (!token || token.length !== 64) {
    history.push("/home");
  }

  return (
    <div className={styles.container}>
      <header>
        <h3>Insira sua nova senha</h3>
      </header>
      {!isRecoveryRequestSuccessfull ? (
        <form
          className={styles.recoveryForm}
          onSubmit={(event) => handlePasswordRequestChange(event, token)}
          method="POST"
        >
          <label htmlFor="email">
            <p>Senha</p>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(event) => handleInputChange(event)}
            />
          </label>
          {hasRecoveryRequestErrors && (
            <p className={styles.recoveryErrorMessage}>
              Ocorreu um erro durante a troca de senha, por favor contate os
              administradores!
            </p>
          )}

          <input type="submit" value="Enviar" />
        </form>
      ) : (
        <div className={styles.successufulRequestContainer}>
          <h3>Senha trocada com sucesso</h3>
        </div>
      )}
    </div>
  );
};

PasswordRecoveryChange.propTypes = {
  location: PropTypes.node.isRequired,
  search: PropTypes.node.isRequired,
};

export default PasswordRecoveryChange;
