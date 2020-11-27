import React from "react";

import styles from "./PasswordRecovery.module.scss";
import usePasswordRecoveryHook from "../../hooks/usePasswordRecoveryHook";

const PasswordRecoveryRequest = () => {
  const {
    email,
    handleInputChange,
    hasRecoveryRequestErrors,
    isRecoveryRequestSuccessfull,
    handlePasswordRecoveryRequest,
  } = usePasswordRecoveryHook();

  return (
    <div className={styles.container}>
      <header>
        <h3>Recupere seu acesso à plataforma</h3>
      </header>
      {!isRecoveryRequestSuccessfull ? (
        <form
          className={styles.recoveryForm}
          onSubmit={handlePasswordRecoveryRequest}
          method="POST"
        >
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => handleInputChange(event)}
            />
          </label>
          {hasRecoveryRequestErrors && (
            <p className={styles.recoveryErrorMessage}>
              Não existe usuário com o email fornecido
            </p>
          )}

          <input type="submit" value="Enviar" />
        </form>
      ) : (
        <div className={styles.successufulRequestContainer}>
          <h3>Enviamos um email para você,</h3>
          <h3>Com as instruções para recuperação!</h3>
        </div>
      )}
      <div className={styles.notSignedUpContainer} />
    </div>
  );
};

export default PasswordRecoveryRequest;
