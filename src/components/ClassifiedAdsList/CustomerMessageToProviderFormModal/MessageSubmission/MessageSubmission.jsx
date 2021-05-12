import React from "react";
import PropTypes from "prop-types";
import styles from "./MessageSubmission.module.scss";
import FormMessage from "./FormMessage/FormMessage";

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
    <FormMessage
      handleChangeInputMessage={handleChangeInputMessage}
      inputMessage={inputMessage}
      isLoading={isLoading}
      handleSendMessage={handleSendMessage}
    />
  </div>
);

export default MessageSubmission;

MessageSubmission.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  handleChangeInputMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  inputMessage: PropTypes.string.isRequired,
};
