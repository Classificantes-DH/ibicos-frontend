import React from "react";
import styles from "./DashCard.module.scss";

const DashCard = () => (
  <div className={styles.container}>
    <div className={styles.descriptionContainer}>
      <h2>89</h2>
      <p>Visualizações Hoje</p>
    </div>
    <div className={styles.footerContainer}>
      <p>Média de Visualizações/Dia - 61.5</p>
    </div>
  </div>
);

export default DashCard;
