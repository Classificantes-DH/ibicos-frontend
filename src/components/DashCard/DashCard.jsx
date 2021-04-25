import React from "react";
import PropTypes from "prop-types";
import styles from "./DashCard.module.scss";
import "./DashCardBackground.scss";

const DashCard = ({
  cardType,
  statisticValue,
  statisticTitle,
  optionalStatisticTitle,
  optionalStatisticValue,
}) => (
  <div className={`${styles.container} background-sizing ${cardType}`}>
    <div className={styles.descriptionContainer}>
      <h2>{statisticValue}</h2>
      <p>{statisticTitle}</p>
    </div>
    <div
      className={`${styles.footerContainer} subcontainer-background-${cardType}`}
    >
      {optionalStatisticTitle && optionalStatisticValue ? (
        <p>
          {optionalStatisticTitle} - {optionalStatisticValue}
        </p>
      ) : null}
    </div>
  </div>
);

DashCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  statisticTitle: PropTypes.string.isRequired,
  statisticValue: PropTypes.number.isRequired,
  optionalStatisticTitle: PropTypes.string.isRequired,
  optionalStatisticValue: PropTypes.number.isRequired,
};

export default DashCard;
