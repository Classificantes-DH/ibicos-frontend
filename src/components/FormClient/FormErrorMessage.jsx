import React from "react";
import PropTypes from "prop-types";
import useSignUpFormValidationHook from "../../hooks/useSignUpFormValidationHook";

const FormErrorMessage = ({ fieldValue, fieldName, fieldNamePTBR }) => {
  const { validationMessages } = useSignUpFormValidationHook(
    fieldValue,
    fieldName,
    fieldNamePTBR
  );

  return (
    <div>
      <p style={{ color: "red", fontSize: "1rem" }}>
        {validationMessages[`${fieldName}ErrorMessage`]}
      </p>
    </div>
  );
};

FormErrorMessage.propTypes = {
  fieldValue: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldNamePTBR: PropTypes.string.isRequired,
};
export default FormErrorMessage;
