import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";

import mechanicLogo from "../../resources/imgs/jobIcons/plumber.svg";
import mapIcon from "../../resources/imgs/utilityIcons/map-location-pure.svg";
import { RatingStars } from "../index";

const JobCard = ({ adInfo }) => {
  const {
    adDescription,
    cities,
    providerStatistics,
    serviceCategory: { categoryName },
  } = adInfo;
  const {
    statistics: { evaluation, evaluationsCounter },
  } = providerStatistics;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={mechanicLogo} alt="Job Logo" className={styles.jobLogo} />
      </div>
      <div className={styles.mainDescription}>
        <h2 className={styles.title}>{categoryName}</h2>
        <RatingStars
          rate={evaluation}
          isEditable={false}
          description="Quantidade de avaliações"
        />
        <p>{evaluationsCounter} avaliações</p>
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
              {cities.map(({ cityName, stateAbb }) => (
                <li key={cityName}>
                  {cityName} | {stateAbb}
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
              {cities.map(({ cityName, regionArea }) =>
                regionArea.map(({ areaName }) => (
                  <li key={areaName}>
                    {areaName} | {cityName}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className={styles.description}>
          <h4>Descrição</h4>
          <p>{adDescription}</p>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  adInfo: PropTypes.shape({
    id: PropTypes.number,

    serviceCategory: PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      id: PropTypes.number,
    }).isRequired,

    cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        stateAbb: PropTypes.string.isRequired,
        idCity: PropTypes.number,
        regionArea: PropTypes.arrayOf(
          PropTypes.arrayOf(
            PropTypes.shape({
              idArea: PropTypes.number,
              areaName: PropTypes.string.isRequired,
            })
          )
        ),
      })
    ).isRequired,

    providerStatistics: PropTypes.shape({
      id: PropTypes.number,
      visualizations: PropTypes.number,
      statistics: PropTypes.shape({
        id: PropTypes.number,
        evaluation: PropTypes.number.isRequired,
        evaluationsCounter: PropTypes.number.isRequired,
        messagesCounter: PropTypes.number,
        hiredServicesCounter: PropTypes.number,
      }).isRequired,
    }),

    adDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
