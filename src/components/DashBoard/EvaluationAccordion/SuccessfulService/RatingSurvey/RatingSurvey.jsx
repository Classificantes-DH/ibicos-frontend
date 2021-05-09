import React from "react";
import PropTypes from "prop-types";
import styles from "./RatingSurvey.module.scss";
import { RatingStars } from "../../../../index";

const RatingSurvey = ({ handleRatingChange, idEvaluate }) => (
  <div className={styles.ratingContainer}>
    <RatingStars
      isEditable
      description="Service evaluation"
      activeColor="#ff7a00"
      rate={0}
      handleRatingChange={(event) => handleRatingChange(event, idEvaluate)}
    />
  </div>
);

export default RatingSurvey;

RatingSurvey.propTypes = {
  idEvaluate: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};
