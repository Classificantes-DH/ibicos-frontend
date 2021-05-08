import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";
import mapIcon from "../../../resources/imgs/utilityIcons/map-location-pure.svg";
import { RatingStars } from "../../index";
import JobLogo from "./JobLogo/JobLogo";

import "../../../util/svg-coloration.scss";

const JobCard = ({ adData, isCustomerAndProviderTheSame = false }) => {
  const { ad, provider_statistics: providerStatistics } = adData;

  const {
    ad_description: adDescription,
    cities,
    service_category: serviceCategory,
  } = ad;

  const { category_name: categoryName } = serviceCategory;

  const {
    statistics: { evaluation, evaluations_counter: evaluationsCounter },
  } = providerStatistics;

  return (
    <div className={styles.container}>
      <JobLogo categoryName={categoryName} />
      <div className={styles.mainDescription}>
        <h2 className={styles.title}>
          {categoryName}
          {isCustomerAndProviderTheSame && (
            <div className={styles.customerOwnedAd} />
          )}
        </h2>

        {evaluationsCounter && evaluationsCounter > 0 ? (
          <div className={styles.evaluationContainer}>
            <RatingStars
              rate={evaluation}
              isEditable={false}
              description="Quantidade de avaliações"
            />
            <p>{evaluationsCounter} avaliações</p>
          </div>
        ) : (
          <div className={styles.notEnoughEvaluationsContainer}>
            <p>Sem avaliações suficientes</p>
          </div>
        )}
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
              {cities.map(({ city_name: cityName, state_name: stateAbb }) => (
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
              {cities.map(({ city_name: cityName, region_area: regionArea }) =>
                regionArea.map(({ area_name: areaName }) => (
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
  adData: PropTypes.shape({
    ad: PropTypes.shape({
      id: PropTypes.number,
      ad_description: PropTypes.string.isRequired,

      service_category: PropTypes.shape({
        category_name: PropTypes.string.isRequired,
        id: PropTypes.number,
      }).isRequired,

      user: PropTypes.shape({
        id: PropTypes.number,
      }),

      cities: PropTypes.arrayOf(
        PropTypes.shape({
          city_name: PropTypes.string.isRequired,
          state_name: PropTypes.string.isRequired,
          idy: PropTypes.number,
          region_area: PropTypes.arrayOf(
            PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
                area_name: PropTypes.string.isRequired,
              })
            )
          ),
        })
      ).isRequired,
    }),

    provider_statistics: PropTypes.shape({
      id: PropTypes.number,
      visualizations: PropTypes.number,
      statistics: PropTypes.shape({
        id: PropTypes.number,
        evaluation: PropTypes.number.isRequired,
        evaluations_counter: PropTypes.number.isRequired,
        messages_counter: PropTypes.number,
        hired_services_counter: PropTypes.number,
      }).isRequired,
    }),
  }).isRequired,
};

export default JobCard;
