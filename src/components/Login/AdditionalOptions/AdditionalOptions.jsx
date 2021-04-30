import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./AdditionalOptions.module.scss";

const AdditionalOptions = ({ path, text }) => {
  return (
    <div className={styles.extraRoutesContainer}>
      <Link to={path}>{text}</Link>
    </div>
  );
};

export default AdditionalOptions;

AdditionalOptions.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
