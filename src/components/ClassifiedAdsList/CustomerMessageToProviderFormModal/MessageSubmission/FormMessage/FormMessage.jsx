import React from "react";
import styles from "./FormMessage.module.scss";
import { LoadingSpinner } from "../../../../index";

const FormMessage = (
  handleSendMessage,
  handleChangeInputMessage,
  inputMessage,
  isLoading
) => (
  <form
    className={styles.formContainer}
    onSubmit={(event) => {
      handleSendMessage(event);
    }}
  >
    <fieldset>
      <textarea
        placeholder="Insira sua mensagem"
        onChange={handleChangeInputMessage}
        value={inputMessage}
      />
    </fieldset>

    <div className={styles.messageSendingContainer}>
      <button type="submit">Enviar</button>
      <div className={styles.loadingSpinnerContainer}>
        <LoadingSpinner isLoading={isLoading} />
      </div>
    </div>
  </form>
);

export default FormMessage;
