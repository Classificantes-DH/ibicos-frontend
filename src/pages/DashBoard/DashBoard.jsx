import React from "react";
import styles from "./DashBoard.module.scss";
import { DashCard } from "../../components";

const DashBoard = () => (
  <div className={styles.container}>
    <h2>Seus indicadores na plataforma, Beltrano Souza</h2>
    <div className={styles.cardsContainer}>
      <DashCard />
      <DashCard />
      <DashCard />
      <DashCard />
    </div>
  </div>
);

export default DashBoard;
