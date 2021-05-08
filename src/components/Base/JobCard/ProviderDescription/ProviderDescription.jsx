import React from "react";
import PropTypes from "prop-types";
import styles from "./ProviderDescription.module.scss";

const ProviderDescription = ({ description }) => (
  <div className={styles.container}>
    <h4>Descrição</h4>
    <p>{description}</p>
  </div>
);

export default ProviderDescription;

ProviderDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
