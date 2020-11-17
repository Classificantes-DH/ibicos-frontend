import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styles from "./EvaluationAccordion.module.scss";
import { RatingStars } from "../index";

const EvaluationAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isServiceConfirmed, setIsServiceConfirmed] = useState(false);
  const location = useLocation();
  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleJobConfirmation = () => {
    setIsServiceConfirmed(true);
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
        {/* #TODO: Remove location path validation and use data coming from the backend */}
        <div
          className={`${styles.content} ${
            isServiceConfirmed ||
            location.pathname.includes("/prestadorDashBoard")
              ? `${styles.activeContent}`
              : ``
          }`}
        >
          <div className={styles.messageContainer}>
            <p>
              Excelente! Indique para nós, em uma escala de 1 à 5 como você
              avalia o serviço contratado:
            </p>
          </div>

          <div className={styles.ratingSurveyContainer}>
            <div className={styles.ratingContainer}>
              <RatingStars
                isEditable
                description="Service evaluation"
                activeColor="#ff7a00"
                rate={5}
              />
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/clienteDashBoard">
            <div
              className={`${styles.content} ${
                !isServiceConfirmed ? `${styles.activeContent}` : ``
              }`}
            >
              <div className={styles.messageContainer}>
                <p>Fulano te enviou uma mensagem,</p>
                <p>vocês fecharam negocio?</p>
              </div>

              <div className={styles.surveyContainer}>
                <button
                  className={styles.submitButton}
                  type="submit"
                  onClick={handleJobConfirmation}
                >
                  <span>Sim</span>
                </button>

                <button className={styles.submitButton} type="submit">
                  <span>Não</span>
                </button>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default EvaluationAccordion;
