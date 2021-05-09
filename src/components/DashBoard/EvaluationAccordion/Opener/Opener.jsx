import React from "react";
import PropTypes from "prop-types";
import styles from "./Opener.module.scss";
import Title from "./Title/Title";

const Opener = ({ handleAccordionToggle, messageDate, isAccordionOpen }) => (
  <header
    className={styles.headerContainer}
    onClick={handleAccordionToggle}
    role="button"
    onKeyPress={handleAccordionToggle}
    tabIndex={0}
  >
    <Title messageDate={messageDate} />

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
