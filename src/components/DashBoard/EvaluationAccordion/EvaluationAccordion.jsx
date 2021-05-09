import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EvaluationAccordion.module.scss";

import Opener from "./Opener/Opener";
import SuccessfulService from "./SuccessfulService/SuccessfulService";
import RatingSurvey from "./SuccessfulService/RatingSurvey/RatingSurvey";

const EvaluationAccordion = ({
  pendingEvaluationData,
  handleJobConfirmation,
  handleJobDeletion,
  handleRatingChange,
}) => {
  const { messageDate, hired, idEvaluate } = pendingEvaluationData;
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isHired, setIsHired] = useState(hired);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={styles.container}>
      <Opener
        handleAccordionToggle={handleAccordionToggle}
        messageDate={messageDate}
        isAccordionOpen={isAccordionOpen}
      />

      <div
        className={`${styles.contentContainer} ${
          isAccordionOpen ? `${styles.showContent}` : ``
        }`}
      >
        <SuccessfulService
          handleRatingChange={handleRatingChange}
          idEvaluate={idEvaluate}
          isHired={isHired}
          message={
            <p>
              Excelente! Indique para nós, em uma escala de 1 à 5 como você
              avalia o serviço contratado:
            </p>
          }
        >
          <RatingSurvey
            handleRatingChange={handleRatingChange}
            idEvaluate={idEvaluate}
          />
        </SuccessfulService>

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
