import React from "react";
import PropTypes from "prop-types";
import styles from "./DashCard.module.scss";
import "./DashCardBackground.scss";

const DashCard = ({ cardType }) => (
  <div className={`${styles.container} background-sizing ${cardType}`}>
    <div className={styles.descriptionContainer}>
      <h2>82</h2>
      <p>Visualizações Hoje</p>
    </div>
    <div
      className={`${styles.footerContainer} subcontainer-background-${cardType}`}
    >
      <p>Média de Visualizações/Dia - 61.5</p>
    </div>
  </div>
);

DashCard.propTypes = {
  cardType: PropTypes.string.isRequired,
};

export default DashCard;
