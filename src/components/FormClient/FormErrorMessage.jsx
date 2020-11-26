import React from "react";
import PropTypes from "prop-types";

const FormErrorMessage = ({ message }) => {
  return (
    <div>
      <p style={{ color: "red", fontSize: "1rem" }}>{message}</p>
    </div>
  );
};

FormErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default FormErrorMessage;
