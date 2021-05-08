import React from "react";
import PropTypes from "prop-types";
import styles from "./Category.module.scss";

const Category = ({ categoryName, isCustomerAndProviderTheSame }) => {
  return (
    <h2 className={styles.title}>
      {categoryName}
      {isCustomerAndProviderTheSame && (
        <div className={styles.customerOwnedAd} />
      )}
    </h2>
  );
};

export default Category;

Category.defaultProps = {
  isCustomerAndProviderTheSame: false,
};

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  isCustomerAndProviderTheSame: PropTypes.bool,
};
