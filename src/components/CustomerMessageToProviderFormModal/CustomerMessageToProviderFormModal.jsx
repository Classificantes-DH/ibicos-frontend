import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomerMessageToProviderFormModal.module.scss";
import defaultModalStyle from "../JobCardModalHolder/JobCardModalDefault.module.scss";
import whatsAppIcon from "../../resources/imgs/utilityIcons/whatsapp.svg";
import emailIcon from "../../resources/imgs/utilityIcons/email.svg";

const CustomerMessageToProviderFormModal = ({
  handleModalEvent,
  handleSendMessage,
  inputMessage,
  handleChangeInputMessage,
}) => {
  return (
    <div className={`${styles.container} ${defaultModalStyle.container}`}>
      <div className={styles.contentContainer}>
        <div className={styles.btnContainer}>
          <button onClick={handleModalEvent} type="button">
            X
          </button>
        </div>
        <div className={styles.introContent}>
          <p>
            <strong>Se interessou?</strong> Entre em contato agora mesmo com o
            profissional!
          </p>
        </div>
        <form
          className={styles.formContainer}
          onSubmit={() => {
            handleModalEvent();
            handleSendMessage();
          }}
        >
          <textarea
            placeholder="Insira sua mensagem"
            onChange={handleChangeInputMessage}
            value={inputMessage}
          />
          <button type="submit">Enviar</button>
        </form>
        <div className={styles.contactInfoContainer}>
          <h2>Ou se preferir...</h2>
          <div className={styles.contact}>
            <img src={whatsAppIcon} alt="Contacte por telefone/whatsapp" />
            <p>11 123445678</p>
          </div>
          <div className={styles.contact}>
            <img src={emailIcon} alt="Contacte por email" />
            <p>email.prestador@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
CustomerMessageToProviderFormModal.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  handleModalEvent: PropTypes.func.isRequired,
  inputMessage: PropTypes.string.isRequired,
  handleChangeInputMessage: PropTypes.func.isRequired,
};

export default CustomerMessageToProviderFormModal;
