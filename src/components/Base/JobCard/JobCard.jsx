import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";

import JobLogo from "./JobLogo/JobLogo";
import MainDescription from "./MainDescription/MainDescription";
import Location from "./Location/Location";

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

      <MainDescription
        categoryName={categoryName}
        isCustomerAndProviderTheSame={isCustomerAndProviderTheSame}
        rate={evaluation}
        evaluationsCounter={evaluationsCounter}
      />
      <div className={styles.jobDetails}>
        <Location cities={cities} />

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