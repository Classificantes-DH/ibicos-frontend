import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";

import mechanicLogo from "../../resources/imgs/jobIcons/plumber.svg";
import mapIcon from "../../resources/imgs/utilityIcons/map-location.svg";
import { RatingStars } from "../index";

const JobCard = ({ adInfo }) => {
  const { category, cities, description, evaluations, rate, state } = adInfo;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={mechanicLogo} alt="Job Logo" className={styles.jobLogo} />
        </div>
        <div className={styles.mainDescription}>
          <h2 className={styles.title}>{category}</h2>
          <RatingStars
            rate={rate}
            isEditable={false}
            description="Quantidade de avaliações"
          />
          <p>{evaluations} avaliações</p>
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
              <ul className={styles.locationList}>
                {cities.map(({ name }) => (
                  <li key={name}>
                    {name} | {state}
                  </li>
                ))}
              </ul>
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
              <ul className={styles.locationList}>
                {cities.map(({ name, regions }) =>
                  regions.map((region) => (
                    <li key={region}>
                      {region} | {name}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className={styles.description}>
            <h4>Descrição</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

JobCard.propTypes = {
  adInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    evaluations: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        region: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
