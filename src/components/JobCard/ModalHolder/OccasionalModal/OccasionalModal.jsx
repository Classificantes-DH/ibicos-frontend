import React from "react";
import PropTypes from "prop-types";
import styles from "./OccasionalModal.module.scss";
import "../ModalDefault.scss";
import emailSuccessIcon from "../../../../resources/imgs/styleSvgs/email_success.svg";
import failModalIcon from "../../../../resources/imgs/styleSvgs/fail_sad_orange.svg";

const OccasionalModal = ({ handleFormSent, isSuccessfullySent }) => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.contentContainer}>
        <div className={styles.btnContainer}>
          <button
            onClick={handleFormSent}
            type="button"
            className={styles.closeBtn}
          >
            X
          </button>
        </div>
        <div className={styles.mainContent}>
          {isSuccessfullySent ? (
            <div className={styles.infoContainer}>
              <img src={failModalIcon} alt="Falha no envio da mensagem" />{" "}
              <p>Ops!</p>
              <p>Algo deu errado, tente novamente mais tarde!</p>
            </div>
          ) : (
            <div className={styles.infoContainer}>
              <img src={emailSuccessIcon} alt="Email enviado com sucesso" />
              <p>Email Enviado com sucesso!</p>
            </div>
          )}
          <div className={styles.btnContainer}>
            <button
              onClick={handleFormSent}
              type="button"
              className={styles.keepSearchingBtn}
            >
              Encontrar mais profissionais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

OccasionalModal.propTypes = {
  handleFormSent: PropTypes.func.isRequired,
  isSuccessfullySent: PropTypes.bool.isRequired,
};

export default OccasionalModal;
