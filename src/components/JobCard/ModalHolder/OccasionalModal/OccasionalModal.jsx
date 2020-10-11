import React from "react";
import PropTypes from "prop-types";
import styles from "./OccasionalModal.module.scss";
import "../ModalDefault.scss";
import emailSuccessIcon from "../../../../resources/imgs/styleSvgs/email_success.svg";
import failModalIcon from "../../../../resources/imgs/styleSvgs/fail_sad_orange.svg";

const OccasionalModal = ({ handleFormSent, isSuccessfullySent }) => {
  return (
    <div className={`${styles.contentContainer} container`}>
      <button onClick={handleFormSent} type="button">
        Click to close
      </button>
      {isSuccessfullySent ? (
        <>
          <p>Ops!</p>
          <p>Algo deu errado, tente novamente mais tarde!</p>
          <img src={failModalIcon} alt="Falha no envio da mensagem" />{" "}
        </>
      ) : (
        <>
          <p>Email Enviado com sucesso!</p>
          <img src={emailSuccessIcon} alt="Email enviado com sucesso" />
        </>
      )}
      <button onClick={handleFormSent} type="button">
        Continue procurando profissionais!
      </button>
    </div>
  );
};

OccasionalModal.propTypes = {
  handleFormSent: PropTypes.func.isRequired,
  isSuccessfullySent: PropTypes.bool.isRequired,
};

export default OccasionalModal;
