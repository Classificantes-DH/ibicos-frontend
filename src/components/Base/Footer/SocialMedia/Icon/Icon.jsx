import React from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.scss";

const Icon = ({ link, imgData }) => {
  const { imgSrc, alt } = imgData;
  return (
    <div className={styles.iconContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={alt} />
      </a>
    </div>
  );
};

export default Icon;

Icon.propTypes = {
  imgData: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.string.isRequired,
};
