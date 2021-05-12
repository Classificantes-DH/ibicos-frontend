import React from "react";
import PropTypes from "prop-types";
// import emailSuccessIcon from "../../../../resources/imgs/styleSvgs/email_success.svg";
import styles from "./EmailSuccessfullySent.module.scss";
import ResponseMessage from "./ResponseMessage/ResponseMessage";

const EmailSuccessfullySent = ({ onClickHandler }) => {
  const { handleModalEvent, handleModalReset } = onClickHandler;
  return (
    <div className={styles.container}>
      <ResponseMessage />
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            handleModalEvent();
            handleModalReset();
          }}
          type="button"
          className={styles.keepSearchingBtn}
        >
          Encontrar mais profissionais
        </button>
      </div>
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
