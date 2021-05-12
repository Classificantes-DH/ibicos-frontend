import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

import { companyLogo } from "../../../../resources/imgs/utilityIcons/index";

const Header = ({ handleModalEvent, handleModalReset }) => (
  <header className={styles.headerContainer}>
    <div className={styles.logoContainer}>
      <img src={companyLogo} alt="iBicos Logo" />
    </div>
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
