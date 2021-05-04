import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactInfo.module.scss";

const ContactInfo = ({ imgData, info }) => {
  const { iconSrc, alt } = imgData;
  return (
    <div className={styles.contactInfo}>
      <img src={iconSrc} alt={alt} className={styles.contactLogo} />
      <div className={styles.contactData}>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  imgData: PropTypes.shape({
    iconSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  info: PropTypes.node.isRequired,
};
