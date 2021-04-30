import React from "react";
import PropTypes from "prop-types";

import styles from "./InputField.module.scss";

const InputField = ({ handleFieldChange, inputData, logoData }) => {
  const { name, type, value } = inputData;
  const { srcImg, alt } = logoData;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={srcImg} alt={alt} className={styles.logo} />
      </div>
      <input
        className={styles.inputField}
        type={type}
        name={name}
        value={value}
        onChange={handleFieldChange}
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  handleFieldChange: PropTypes.func.isRequired,

  inputData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,

  logoData: PropTypes.shape({
    srcImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
