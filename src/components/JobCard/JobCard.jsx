import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";
import mapIcon from "../../resources/imgs/utilityIcons/map-location-pure.svg";
// import { RatingStars } from "../index";
import useJobIconImportHook from "../../hooks/useJobIconImportHook";

import "../../util/svg-coloration.scss";

const JobCard = ({ adInfo, isCustomerAndProviderTheSame = false }) => {
  const {
    id,
    adDescription,
    cities,
    // providerStatistics,
    serviceCategory: { categoryName },
  } = adInfo;

  // const {
  //   statistics: { evaluation, evaluationsCounter },
  // } = providerStatistics;

  const img = useJobIconImportHook(categoryName.toLowerCase())[0];

  const randomSvgColor = ["primary-purple", "primary-orange", "primary-black"];
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={img}
          alt="Job Logo"
          className={`${styles.jobLogo} ${
            randomSvgColor[id % randomSvgColor.length]
          }`}
        />
      </div>
      <div className={styles.mainDescription}>
        <h2 className={styles.title}>
          {categoryName}
          {isCustomerAndProviderTheSame && (
            <div className={styles.customerOwnedAd} />
          )}
        </h2>
        {/* #TODO: fix evaluation issues */}
        {/* {evaluationsCounter && evaluationsCounter > 0 ? (
          <div className={styles.evaluationContainer}>
            <RatingStars
              rate={evaluation}
              isEditable={false}
              description="Quantidade de avaliações"
            />
            <p>{evaluationsCounter} avaliações</p>
          </div>
        ) : null}

        {evaluationsCounter && evaluationsCounter === 0 ? (
          <div className={styles.notEnoughEvaluationsContainer}>
            <p>O usuário ainda não possui avaliações suficientes</p>
          </div>
        ) : null}

        {() => {
          if (!evaluationsCounter) {
            return null;
          }
          if (evaluationsCounter > 0) {
            return (
              <div className={styles.evaluationContainer}>
                <RatingStars
                  rate={evaluation}
                  isEditable={false}
                  description="Quantidade de avaliações"
                />
                <p>{evaluationsCounter} avaliações</p>
              </div>
            );
          }
          return (
            <div className={styles.notEnoughEvaluationsContainer}>
              <p>O usuário ainda não possui avaliações suficientes</p>
            </div>
          );
        }} */}
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

JobCard.defaultProps = {
  isCustomerAndProviderTheSame: false,
};

JobCard.propTypes = {
  isCustomerAndProviderTheSame: PropTypes.bool,
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
