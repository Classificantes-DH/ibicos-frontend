import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ title }) => (
  <h4 className={styles.title}>
    <span>{">"}</span> {title}
  </h4>
);

export default Title;

Title.propTypes = {
  title: PropTypes.func.isRequired,
};
