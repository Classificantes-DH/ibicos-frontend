import React from "react";

import PropTypes from "prop-types";
import styles from "./JobCard.module.scss";

import JobLogo from "./JobLogo/JobLogo";
import MainDescription from "./MainDescription/MainDescription";
import Location from "./Location/Location";
import ProviderDescription from "./ProviderDescription/ProviderDescription";

const JobCard = ({ adData, isCustomerAndProviderTheSame = false }) => {
  const { ad, provider_statistics: providerStatistics } = adData;

  const {
    ad_description: adDescription,
    cities,
    service_category: serviceCategory,
    id,
  } = ad;

  const { category_name: categoryName } = serviceCategory;

  const {
    statistics: { evaluation, evaluations_counter: evaluationsCounter },
  } = providerStatistics;

  return (
    <div className={styles.container}>
      <JobLogo categoryName={categoryName} id={id} />

      <MainDescription
        categoryName={categoryName}
        isCustomerAndProviderTheSame={isCustomerAndProviderTheSame}
        rate={evaluation}
        evaluationsCounter={evaluationsCounter}
      />
      <div className={styles.jobDetails}>
        <Location cities={cities} />
        <ProviderDescription description={adDescription} />
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
      ad_description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      service_category: PropTypes.shape({
        category_name: PropTypes.string.isRequired,
      }).isRequired,

      cities: PropTypes.arrayOf(
        PropTypes.shape({
          city_name: PropTypes.string.isRequired,
          state_name: PropTypes.string.isRequired,
          region_area: PropTypes.arrayOf(
            PropTypes.arrayOf(
              PropTypes.shape({
                area_name: PropTypes.string.isRequired,
              })
            )
          ),
        })
      ).isRequired,
    }),

    provider_statistics: PropTypes.shape({
      statistics: PropTypes.shape({
        evaluation: PropTypes.number.isRequired,
        evaluations_counter: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default JobCard;
