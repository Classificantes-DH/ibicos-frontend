import React, { useState } from "react";
import styles from "./EvaluationAccordion.module.scss";

const EvaluationAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <div className={styles.container}>
      <header
        className={styles.headerContainer}
        onClick={handleAccordionToggle}
        role="button"
        onKeyPress={handleAccordionToggle}
        tabIndex={0}
      >
        <div className={styles.titleContainer}>
          <h2>
            <span>{">"}</span>06-11-2020
          </h2>
        </div>
        <div className={styles.eventControllerContainer}>
          <div
            className={`${styles.openerLine} ${
              isAccordionOpen
                ? `${styles.activeAccordion}`
                : `${styles.defaultPosition}`
            }`}
          />
          <div className={styles.openerLine} />
        </div>
      </header>
      <div
        className={`${styles.contentContainer} ${
          isAccordionOpen ? `${styles.showContent}` : ``
        }`}
      >
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
    </div>
  );
};

export default EvaluationAccordion;
