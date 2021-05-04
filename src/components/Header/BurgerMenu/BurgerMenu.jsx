import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ handleMenuToggle, isBurgerActive }) => (
  <div className={styles.burgerMenu}>
    <button
      type="button"
      onClick={handleMenuToggle}
      className={`${styles.burgerMenu} ${
        isBurgerActive ? `${styles.burgerActive}` : ``
      }`}
    >
      <div className={styles.burgerLine} />
      <div className={styles.burgerLine} />
      <div className={styles.burgerLine} />
    </button>
  </div>
);

export default BurgerMenu;

BurgerMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  isBurgerActive: PropTypes.bool.isRequired,
};
