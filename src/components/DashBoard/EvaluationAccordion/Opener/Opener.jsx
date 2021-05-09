import React from "react";
import PropTypes from "prop-types";
import styles from "./Opener.module.scss";

const Opener = ({ handleAccordionToggle, messageDate, isAccordionOpen }) => (
  <header
    className={styles.headerContainer}
    onClick={handleAccordionToggle}
    role="button"
    onKeyPress={handleAccordionToggle}
    tabIndex={0}
  >
    <div className={styles.titleContainer}>
      <h2>
        <span>{">"}</span>
        {messageDate}
      </h2>
    </div>

    <div className={styles.eventControllerContainer}>
      <div
        className={`${styles.openerLine} ${
          isAccordionOpen
            ? `${styles.activeAccordion}`
            : `${styles.defaultPosition}`
        }`}
      />
      <div className={styles.openerLine} />
    </div>
  </header>
);
export default Opener;

Opener.propTypes = {
  handleAccordionToggle: PropTypes.func.isRequired,
  messageDate: PropTypes.string.isRequired,
  isAccordionOpen: PropTypes.bool.isRequired,
};
