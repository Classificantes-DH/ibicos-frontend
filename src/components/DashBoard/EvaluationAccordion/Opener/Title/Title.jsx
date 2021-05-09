import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ messageDate }) => (
  <div className={styles.container}>
    <h2>
      <span>{">"}</span>
      {messageDate}
    </h2>
  </div>
);

export default Title;

Title.propTypes = {
  messageDate: PropTypes.string.isRequired,
};
