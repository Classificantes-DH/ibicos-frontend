import React from "react";
import styles from "./EvaluationContent.module.scss";

const EvaluationContent = () => (
  <div className={styles.container}>
    <div className={styles.messageContainer}>
      <p>Fulano te enviou uma mensagem, vocês fecharam negocio?</p>
    </div>
    <div className={styles.surveyContainer}>
      <button className={styles.submitButton} type="submit">
        <span>Sim</span>
      </button>
      <button className={styles.submitButton} type="submit">
        <span>Não</span>
      </button>
    </div>
  </div>
);

export default EvaluationContent;
