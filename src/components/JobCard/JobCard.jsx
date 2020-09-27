import React from "react";
import styles from "./JobCard.module.scss";

const JobCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>Logo</p>
      </div>
      <div className={styles.mainDescription}>
        <h2>Mecânico</h2>
        <p>5 estrelas</p>
        <p>3 avaliações</p>
      </div>
      <div className={styles.location}>
        <div className={styles.locationSpecific}>
          <h4>Locais</h4>
          <p>São Paulo | SP</p>
        </div>
        <div className={styles.locationSpecific}>
          <h4>Região</h4>
          <p>Zona Sul, Zona Leste</p>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Descrição</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          ratione.
        </p>
      </div>
    </div>
  );
};

export default JobCard;
