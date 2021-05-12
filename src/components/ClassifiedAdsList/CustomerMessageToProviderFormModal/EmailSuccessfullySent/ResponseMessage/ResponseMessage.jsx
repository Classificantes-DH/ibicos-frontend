import React from "react";
import emailSuccessIcon from "../../../../../resources/imgs/styleSvgs/email_success.svg";
import styles from "./ResponseMessage.module.scss";

const ResponseMessage = () => (
  <div className={styles.infoContainer}>
    <img src={emailSuccessIcon} alt="Email enviado com sucesso" />
    <p>Email Enviado com sucesso!</p>
  </div>
);

export default ResponseMessage;
