import React from "react";
import PropTypes from "prop-types";
import styles from "./MainDescription.module.scss";
import Evaluation from "./Evaluation/Evaluation";
import Category from "./Category/Category";

const MainDescription = ({
  categoryName,
  isCustomerAndProviderTheSame,
  evaluationsCounter,
  rate,
}) => {
  return (
    <div className={styles.mainDescription}>
      <Category
        categoryName={categoryName}
        isCustomerAndProviderTheSame={isCustomerAndProviderTheSame}
      />
      <Evaluation evaluation={{ evaluationsCounter, rate }} />
    </div>
  );
};

export default MainDescription;

MainDescription.defaultProps = {
  isCustomerAndProviderTheSame: false,
};

MainDescription.propTypes = {
  categoryName: PropTypes.string.isRequired,
  isCustomerAndProviderTheSame: PropTypes.bool,
  evaluationsCounter: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};
