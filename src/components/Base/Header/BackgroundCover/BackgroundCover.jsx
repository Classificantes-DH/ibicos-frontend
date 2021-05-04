import React from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundCover.module.scss";

const BackgroundCover = ({ isBurgerActive, handleMenuToggle }) => (
  <div
    className={`${styles.backgroundCover} ${
      isBurgerActive ? `${styles.backgroundCoverActive}` : ``
    }`}
    onClick={handleMenuToggle}
    role="button"
    aria-label="Menu background"
    onKeyPress={handleMenuToggle}
    tabIndex={0}
  />
);

export default BackgroundCover;

BackgroundCover.propTypes = {
  isBurgerActive: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
