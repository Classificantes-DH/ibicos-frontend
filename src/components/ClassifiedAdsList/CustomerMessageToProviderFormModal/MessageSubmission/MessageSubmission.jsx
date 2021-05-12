import React from "react";
import PropTypes from "prop-types";
import styles from "./MessageSubmission.module.scss";
import { LoadingSpinner } from "../../../index";

const MessageSubmission = ({
  handleSendMessage,
  handleChangeInputMessage,
  isLoading,
  inputMessage,
}) => (
  <div className={styles.container}>
    <div className={styles.introContent}>
      <p>
        <strong>Se interessou?</strong> Entre em contato agora mesmo com o
        profissional!
      </p>
    </div>
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
  </div>
);

export default MessageSubmission;

MessageSubmission.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  handleChangeInputMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  inputMessage: PropTypes.string.isRequired,
};
