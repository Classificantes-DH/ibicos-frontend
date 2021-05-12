import React from "react";
import PropTypes from "prop-types";

import styles from "./EmailSuccessfullySent.module.scss";
import ResponseMessage from "./ResponseMessage/ResponseMessage";
import { Button } from "../../../index";

import "./Button.scss";

const EmailSuccessfullySent = ({ onClickHandler }) => {
  const { handleModalEvent, handleModalReset } = onClickHandler;
  return (
    <div className={styles.container}>
      <ResponseMessage />
      <Button
        onClickHandler={() => {
          handleModalEvent();
          handleModalReset();
        }}
        text="Encontrar mais profissionais"
        containerClassName="email-successfully-sent-btn-container"
        buttonClassName="email-successfully-sent-btn"
      />
    </div>
  );
};

export default EmailSuccessfullySent;

EmailSuccessfullySent.propTypes = {
  onClickHandler: PropTypes.shape({
    handleModalEvent: PropTypes.func.isRequired,
    handleModalReset: PropTypes.func.isRequired,
  }).isRequired,
};
