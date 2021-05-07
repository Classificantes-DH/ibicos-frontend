import React from "react";
import PropTypes from "prop-types";
import styles from "./ArrowDropDownIcon.module.scss";

const ArrowDropDownIcon = ({ isExtendedMenuOpen }) => (
  <i
    className={`${styles.arrowIcon} ${
      isExtendedMenuOpen ? `${styles.activeExtended}` : ``
    }`}
  />
);

export default ArrowDropDownIcon;

ArrowDropDownIcon.propTypes = {
  isExtendedMenuOpen: PropTypes.bool.isRequired,
};
