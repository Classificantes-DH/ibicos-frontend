import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EvaluationAccordion.module.scss";

import Opener from "./Opener/Opener";
import Survey from "./Survey/Survey";
import RatingSurvey from "./Survey/RatingSurvey/RatingSurvey";
import ConfirmHiringSurvey from "./Survey/ConfirmHiringSurvey/ConfirmHiringSurvey";

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

  const handleHiredChange = (newIsHired) => {
    setIsHired(newIsHired);
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
        <Survey
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
        </Survey>

        <Switch>
          <Route path="/clienteDashBoard">
            <Survey
              isHired={!isHired}
              message={
                <>
                  <p>Fulano te enviou uma mensagem,</p>
                  <p>vocês fecharam negocio?</p>
                </>
              }
            >
              <ConfirmHiringSurvey
                handleHiredChange={handleHiredChange}
                handleJobDeletion={handleJobDeletion}
                idEvaluate={idEvaluate}
                handleJobConfirmation={handleJobConfirmation}
              />
            </Survey>
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
