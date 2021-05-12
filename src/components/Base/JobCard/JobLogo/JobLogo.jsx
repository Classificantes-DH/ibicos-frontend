import React from "react";
import "../../../../util/svg-coloration.scss";
import PropTypes from "prop-types";
import styles from "./JobLogo.module.scss";
import { useJobIconImportHook } from "../../../../hooks/index";

const JobLogo = ({ categoryName, id }) => {
  const img = useJobIconImportHook(categoryName.toLowerCase())[0];
  const svgColors = ["primary-purple", "primary-orange", "primary-black"];
  const selectedSvgColorIndex = id % svgColors.length;

  return (
    <div className={styles.container}>
      <img
        src={img}
        alt={`Representação da categoria ${categoryName}`}
        className={`${styles.logo} ${svgColors[selectedSvgColorIndex]}`}
      />
    </div>
  );
};

export default JobLogo;

JobLogo.propTypes = {
  categoryName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
