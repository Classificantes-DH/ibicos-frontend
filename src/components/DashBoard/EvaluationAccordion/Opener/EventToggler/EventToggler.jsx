import React from "react";
import PropTypes from "prop-types";
import styles from "./EventToggler.module.scss";

const EventToggler = ({ isAccordionOpen }) => (
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
);

export default EventToggler;

EventToggler.propTypes = {
  isAccordionOpen: PropTypes.bool.isRequired,
};
