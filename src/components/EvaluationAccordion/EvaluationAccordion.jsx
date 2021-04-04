import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EvaluationAccordion.module.scss";
import { RatingStars } from "../index";

const EvaluationAccordion = ({
  pendingEvaluationData,
  handleJobConfirmation,
  handleJobDeletion,
  handleRatingChange,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isHired, setIsHired] = useState(false);
  const location = useLocation();

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const { messageDate, hired, idEvaluate } = pendingEvaluationData;

  useEffect(() => {
    setIsHired(hired);
  }, []);

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
            <span>{">"}</span>
            {messageDate}
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
            isHired || location.pathname.includes("/prestadorDashBoard")
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
                rate={0}
                handleRatingChange={(event) =>
                  handleRatingChange(event, idEvaluate)
                }
              />
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/clienteDashBoard">
            <div
              className={`${styles.content} ${
                !isHired ? `${styles.activeContent}` : ``
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
                  onClick={() => {
                    handleJobConfirmation(idEvaluate);
                    setIsHired(true);
                  }}
                >
                  <span>Sim</span>
                </button>

                <button
                  className={styles.submitButton}
                  onClick={() => handleJobDeletion(idEvaluate)}
                  type="submit"
                >
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

EvaluationAccordion.propTypes = {
  pendingEvaluationData: PropTypes.shape({
    messageDate: PropTypes.string.isRequired,
    hired: PropTypes.bool.isRequired,
    idEvaluate: PropTypes.number.isRequired,
  }).isRequired,
  handleJobConfirmation: PropTypes.func.isRequired,
  handleJobDeletion: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export default EvaluationAccordion;
