import React from "react";
import PropTypes from "prop-types";
import styles from "./FormMessage.module.scss";
import { LoadingSpinner } from "../../../../index";

const FormMessage = ({
  handleSendMessage,
  handleChangeInputMessage,
  inputMessage,
  isLoading,
}) => (
  <form className={styles.formContainer} onSubmit={handleSendMessage}>
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

FormMessage.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  inputMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleChangeInputMessage: PropTypes.func.isRequired,
};
