import React from "react";
import PropTypes from "prop-types";

const InputField = ({ handleFieldChange, classes, inputData, logoData }) => {
  const { wrapperContainer, logoContainer, logo, input } = classes;
  const { name, type, value } = inputData;
  const { srcImg, alt } = logoData;

  return (
    <div className={wrapperContainer}>
      <div className={logoContainer}>
        <img src={srcImg} alt={alt} className={logo} />
      </div>
      <input
        className={input}
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

  classes: PropTypes.shape({
    wrapperContainer: PropTypes.string.isRequired,
    logoContainer: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  }).isRequired,

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
