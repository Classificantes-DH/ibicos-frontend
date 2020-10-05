import React from "react";
import PropTypes from "prop-types";

import FormClientDetails from "./FormClientDetails";
import FormClientAddress from "./FormClientAddress";

const FormClient = ({ currentStep, fields, handleFieldChange }) => {
  switch (currentStep) {
    case 1:
      return (
        <FormClientDetails
          values={fields}
          handleFieldChange={handleFieldChange}
        />
      );

    case 2:
      return (
        <FormClientAddress
          values={fields}
          handleFieldChange={handleFieldChange}
        />
      );

    default:
      return null;
  }
};

FormClient.propTypes = {
  currentStep: PropTypes.number.isRequired,
  fields: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    nickname: PropTypes.string,
    cpfCnpj: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    neighbourhood: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string,
    complement: PropTypes.string,
  }).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormClient;
