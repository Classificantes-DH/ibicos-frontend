import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";

const Header = ({ handleModalEvent, handleModalReset }) => (
  <header className={styles.headerContainer}>
    <Logo />
    <div className={styles.btnContainer}>
      <button
        onClick={() => {
          handleModalEvent();
          handleModalReset();
        }}
        type="button"
      >
        <div className={styles.r1} />
        <div className={styles.r2} />
      </button>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  handleModalEvent: PropTypes.func.isRequired,
  handleModalReset: PropTypes.func.isRequired,
};
