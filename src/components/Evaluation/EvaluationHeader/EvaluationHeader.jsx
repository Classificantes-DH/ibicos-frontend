import React from "react";
import styles from "./EvaluationHeader.module.scss";

const EvaluationHeader = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h2>
        <span>{">"}</span>06-11-2020
      </h2>
    </div>
    <div className={styles.eventControllerContainer}>
      <div className={styles.openerLine} />
      <div className={styles.openerLine} />
    </div>
  </div>
);

export default EvaluationHeader;
