import React from "react";
import PropTypes from "prop-types";
import styles from "./ConfirmHiringSurvey.module.scss";

const ConfirmHiringSurvey = ({
  handleHiredChange,
  handleJobConfirmation,
  handleJobDeletion,
  idEvaluate,
}) => (
  <div className={styles.surveyContainer}>
    <button
      className={styles.submitButton}
      type="submit"
      onClick={() => {
        handleJobConfirmation(idEvaluate);
        handleHiredChange(true);
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
);
export default ConfirmHiringSurvey;

ConfirmHiringSurvey.propTypes = {
  idEvaluate: PropTypes.number.isRequired,
  handleJobConfirmation: PropTypes.func.isRequired,
  handleJobDeletion: PropTypes.func.isRequired,
  handleHiredChange: PropTypes.func.isRequired,
};
