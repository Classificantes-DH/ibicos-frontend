import React from "react";
import PropTypes from "prop-types";
import styles from "./ProcessFeedback.module.scss";

const ProcessFeedback = ({ isAdSuccessfullyRegistered }) =>
  isAdSuccessfullyRegistered ? (
    <div className={styles.sucessRegistration}>
      <h4>Anúncio registrado com sucesso</h4>
    </div>
  ) : null;

export default ProcessFeedback;

ProcessFeedback.propTypes = {
  isAdSuccessfullyRegistered: PropTypes.bool.isRequired,
};
