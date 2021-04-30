import React from "react";
import PropTypes from "prop-types";
import styles from "./FlagHeader.module.scss";

const FlagHeader = ({ text }) => (
  <div className={styles.contentHeader}>
    <h3>{text}</h3>
  </div>
);

export default FlagHeader;

FlagHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
