import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import { Button } from "../../../index";
import "./Button.scss";

const Header = ({ onClickHandlers }) => {
  const { handleModalEvent, handleModalReset } = onClickHandlers;
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Button
        containerClassName="customer-message-modal-header-container"
        buttonClassName="customer-message-modal-header-btn"
        onClickHandler={() => {
          handleModalEvent();
          handleModalReset();
        }}
        type="button"
      >
        <div className={`${styles.r1} ${styles.rectangle}`} />
        <div className={`${styles.r2} ${styles.rectangle}`} />
      </Button>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onClickHandlers: PropTypes.shape({
    handleModalEvent: PropTypes.func.isRequired,
    handleModalReset: PropTypes.func.isRequired,
  }).isRequired,
};
