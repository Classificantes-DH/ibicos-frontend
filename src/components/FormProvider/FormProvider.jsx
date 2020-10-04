import React from "react";
import PropTypes from "prop-types";

import FormProviderDetails from "./FormProviderDetails";
import FormProviderAddress from "./FormProviderAddress";
import FormProviderRegionsServices from "./FormProviderRegionsServices";
import FormSignupSuccessful from "../FormSignupSucessful/FormSignupSucessful";

const FormProvider = ({
  currentStep,
  fields,
  handleFieldChange,
  regions,
  services,
  addRegion,
  addService,
}) => {
  switch (currentStep) {
    case 1:
      return (
        <FormProviderDetails
          values={fields}
          handleFieldChange={handleFieldChange}
        />
      );

    case 2:
      return (
        <FormProviderAddress
          values={fields}
          handleFieldChange={handleFieldChange}
        />
      );

    case 3:
      return (
        <FormProviderRegionsServices
          values={{ regions, services }}
          addRegion={addRegion}
          addService={addService}
          handleFieldChange={handleFieldChange}
        />
      );

    default:
      return <FormSignupSuccessful />;
  }
};

FormProvider.propTypes = {
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
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      regionName: PropTypes.string,
    })
  ).isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      serviceName: PropTypes.string,
    })
  ).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  addRegion: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
};

export default FormProvider;
