import React from "react";
import PropTypes from "prop-types";
import styles from "./ResultMessageToProviderModal.module.scss";

import defaultModalStyle from "../JobCardModalHolder/JobCardModalDefault.module.scss";
import emailSuccessIcon from "../../resources/imgs/styleSvgs/email_success.svg";
import failIcon from "../../resources/imgs/styleSvgs/fail_sad_orange.svg";

const ResultMessageToProviderModal = ({
  handleOccasionalModalsReset,
  hasError,
}) => {
  return (
    <div className={`${styles.container} ${defaultModalStyle.container}`}>
      <div className={styles.contentContainer}>
        <div className={styles.btnContainer}>
          <button
            onClick={handleOccasionalModalsReset}
            type="button"
            className={styles.closeBtn}
          >
            X
          </button>
        </div>
        <div className={styles.mainContent}>
          {hasError ? (
            <div className={styles.infoContainer}>
              <img src={failIcon} alt="Falha no envio da mensagem" />{" "}
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
              onClick={handleOccasionalModalsReset}
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

ResultMessageToProviderModal.propTypes = {
  handleOccasionalModalsReset: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default ResultMessageToProviderModal;
