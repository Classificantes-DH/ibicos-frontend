import React from "react";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styles from "./SuccessfulService.module.scss";

import RatingSurvey from "./RatingSurvey/RatingSurvey";
import Message from "./Message/Message";

const SuccessfulService = ({
  isHired,
  handleRatingChange,
  idEvaluate,
  message,
}) => {
  const location = useLocation();
  /* #TODO: Remove location path validation and use data coming from the backend */
  return (
    <div
      className={`${styles.content} ${
        isHired || location.pathname.includes("/prestadorDashBoard")
          ? `${styles.activeContent}`
          : ``
      }`}
    >
      {/* <div className={styles.messageContainer}>
        <p>
          Excelente! Indique para nós, em uma escala de 1 à 5 como você avalia o
          serviço contratado:
        </p>
      </div> */}
      <Message message={message} />

      <div className={styles.ratingSurveyContainer}>
        <RatingSurvey
          handleRatingChange={handleRatingChange}
          idEvaluate={idEvaluate}
        />
      </div>
    </div>
  );
};

export default SuccessfulService;

SuccessfulService.propTypes = {
  isHired: PropTypes.bool.isRequired,
  idEvaluate: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  message: PropTypes.node.isRequired,
};
