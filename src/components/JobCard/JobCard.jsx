import React from "react";
import styles from "./JobCard.module.scss";

import mechanicLogo from "../../resources/imgs/jobIcons/plumber.svg";
import mapIcon from "../../resources/imgs/utilityIcons/map-location.svg";

import { RatingStars } from "../index";

const JobCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={mechanicLogo} alt="Job Logo" className={styles.jobLogo} />
      </div>
      <div className={styles.mainDescription}>
        <h2 className={styles.title}>Mecânico</h2>
        <RatingStars />
        <p>3 avaliações</p>
      </div>
      <div className={styles.jobDetails}>
        <div className={styles.location}>
          <div className={styles.locationSpecific}>
            <div className={styles.locationSpecificRegion}>
              <img
                src={mapIcon}
                alt="Map Location Icon"
                className={styles.icon}
              />
              <h4>Locais</h4>
            </div>
            <p>São Paulo | SP</p>
          </div>
          <div className={styles.locationSpecific}>
            <div className={styles.locationSpecificRegion}>
              <img
                src={mapIcon}
                alt="Map Location Icon"
                className={styles.icon}
              />
              <h4>Região</h4>
            </div>
            <p>Zona Sul, Zona Leste</p>
          </div>
        </div>
        <div className={styles.description}>
          <h4>Descrição</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            quidem explicabo animi dolores distinctio vitae amet quo suscipit
            facere nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
