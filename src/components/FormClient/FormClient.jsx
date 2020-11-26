import React from "react";
import PropTypes from "prop-types";

import FormClientDetails from "./FormClientDetails";
import FormClientAddress from "./FormClientAddress";
import FormUser from "./FormUser";

const FormClient = ({
  currentStep,
  fields,
  handleFieldChange,
  validationMessages,
  handleFieldValidation,
}) => {
  switch (currentStep) {
    case 1:
      return (
        <FormUser
          values={fields}
          handleFieldChange={handleFieldChange}
          handleFieldValidation={handleFieldValidation}
          validationMessages={validationMessages}
        />
      );

    case 2:
      return (
        <FormClientDetails
          values={fields}
          handleFieldChange={handleFieldChange}
          handleFieldValidation={handleFieldValidation}
          validationMessages={validationMessages}
        />
      );

    case 3:
      return (
        <FormClientAddress
          values={fields}
          handleFieldChange={handleFieldChange}
          handleFieldValidation={handleFieldValidation}
          validationMessages={validationMessages}
        />
      );

    default:
      return null;
  }
};

FormClient.propTypes = {
  currentStep: PropTypes.number.isRequired,

  fields: PropTypes.shape({
    email: PropTypes.string,
    passwordUser: PropTypes.string,
    notice: PropTypes.bool,
    namePerson: PropTypes.string,
    birthday: PropTypes.string,
    cpf: PropTypes.string,
    cpnj: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string,
    numberAddress: PropTypes.string,
    neighborhood: PropTypes.string,
    complement: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,

  validationMessages: PropTypes.shape({
    emailErrorMessage: PropTypes.string,
    passwordUserErrorMessage: PropTypes.string,
    stateErrorMessage: PropTypes.string,
    cityErrorMessage: PropTypes.string,
    neighborhoodErrorMessage: PropTypes.string,
    postalCodeErrorMessage: PropTypes.string,
    streetErrorMessage: PropTypes.string,
    numberAddressErrorMessage: PropTypes.string,
    namePersonErrorMessage: PropTypes.string,
    birthdayErrorMessage: PropTypes.string,
    cpfErrorMessage: PropTypes.string,
    cnpjErrorMessage: PropTypes.string,
  }).isRequired,

  handleFieldChange: PropTypes.func.isRequired,
  handleFieldValidation: PropTypes.func.isRequired,
};

export default FormClient;
