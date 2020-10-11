import React from "react";
import PropTypes from "prop-types";
import styles from "./FormModal.module.scss";
import "../ModalDefault.scss";
import whatsAppIcon from "../../../../resources/imgs/utilityIcons/whatsapp.svg";
import emailIcon from "../../../../resources/imgs/utilityIcons/email.svg";

const FormModal = ({ handleModalClose, handleFormSent }) => {
  return (
    <div className={`${styles.contentContainer} container`}>
      <button onClick={handleModalClose} type="button">
        Click to close
      </button>
      <p>
        <strong>Se interessou?</strong> Entre em contato agora mesmo com o
        profissional!
      </p>
      <form
        onSubmit={() => {
          handleModalClose();
          handleFormSent();
        }}
      >
        <textarea>Insira sua mensagem</textarea>
        <button type="submit">Enviar</button>
      </form>
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
  );
};
FormModal.propTypes = {
  handleFormSent: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default FormModal;
