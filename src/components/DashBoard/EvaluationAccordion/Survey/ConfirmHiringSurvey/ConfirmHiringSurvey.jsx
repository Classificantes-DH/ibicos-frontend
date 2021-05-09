import React from "react";
import PropTypes from "prop-types";
import styles from "./ConfirmHiringSurvey.module.scss";

import { Button } from "../../../../index";
import "./Button.scss";

const ConfirmHiringSurvey = ({
  handleHiredChange,
  handleJobConfirmation,
  handleJobDeletion,
  idEvaluate,
}) => (
  <div className={styles.surveyContainer}>
    <Button
      onClickHandler={() => {
        handleJobConfirmation(idEvaluate);
        handleHiredChange(true);
      }}
      text={<span>Sim</span>}
      type="submit"
      buttonClassName="survey-btn"
      containerClassName="survey-container-confirm-hiring-survey"
    />

    <Button
      onClickHandler={() => {
        handleJobDeletion(idEvaluate);
      }}
      text={<span>Não</span>}
      type="submit"
      buttonClassName="survey-btn"
      containerClassName="survey-container-confirm-hiring-survey"
    />
  </div>
);
export default ConfirmHiringSurvey;

ConfirmHiringSurvey.propTypes = {
  idEvaluate: PropTypes.number.isRequired,
  handleJobConfirmation: PropTypes.func.isRequired,
  handleJobDeletion: PropTypes.func.isRequired,
  handleHiredChange: PropTypes.func.isRequired,
};
