import React from "react";
import PropTypes from "prop-types";
import styles from "./DemonstrationCard.module.scss";

const DemonstrationCard = ({ imgData, text }) => {
  const { imgSrc, altText } = imgData;

  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={altText} />
      </div>
      <div className={styles.descriptionContainer}>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default DemonstrationCard;

DemonstrationCard.propTypes = {
  imgData: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};
