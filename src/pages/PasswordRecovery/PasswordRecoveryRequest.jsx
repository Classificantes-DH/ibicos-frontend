import React from "react";

import styles from "./PasswordRecovery.module.scss";
import usePasswordRecoveryRequestHook from "../../hooks/usePasswordRecoveryRequestHook";

import { LoadingSpinner } from "../../components/index";

const PasswordRecoveryRequest = () => {
  const {
    email,
    isLoading,
    handleInputChange,
    hasRecoveryRequestErrors,
    isRecoveryRequestSuccessfull,
    handlePasswordRecoveryRequest,
  } = usePasswordRecoveryRequestHook();

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
          {hasRecoveryRequestErrors && !isLoading && (
            <p className={styles.recoveryErrorMessage}>
              Não existe usuário com o email fornecido
            </p>
          )}

          <input type="submit" value="Enviar" />
        </form>
      ) : (
        <div className={styles.successufulRequestContainer}>
          <h3>Enviamos um email para você,</h3>
          <h3>com as instruções para recuperação!</h3>
        </div>
      )}
      <div className={styles.loadingContainer}>
        <LoadingSpinner isLoading={isLoading} />
      </div>
    </div>
  );
};

export default PasswordRecoveryRequest;
