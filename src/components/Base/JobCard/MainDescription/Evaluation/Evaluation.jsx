import React from "react";
import PropTypes from "prop-types";
import styles from "./Evaluation.module.scss";
import { RatingStars } from "../../../../index";

const Evaluation = ({ evaluation }) => {
  const { evaluationsCounter, rate } = evaluation;

  return evaluationsCounter && evaluationsCounter > 0 ? (
    <div className={styles.evaluationContainer}>
      <RatingStars
        rate={rate}
        isEditable={false}
        description="Quantidade de avaliações"
      />
      <p>{evaluationsCounter} avaliações</p>
    </div>
  ) : (
    <div className={styles.notEnoughEvaluationsContainer}>
      <p>Sem avaliações suficientes</p>
    </div>
  );
};

export default Evaluation;

Evaluation.propTypes = {
  evaluation: PropTypes.shape({
    evaluationsCounter: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};
