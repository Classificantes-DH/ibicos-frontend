import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import FormErrorMessage from "./FormErrorMessage";
import { Select } from "../index";

const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "TO",
];

const FormProviderAddress = (props) => {
  const {
    values: {
      state,
      city,
      neighborhood,
      postalCode,
      street,
      complement,
      numberAddress,
    },
    handleFieldChange,
    handleFieldValidation,
    validationMessages: {
      stateErrorMessage,
      cityErrorMessage,
      neighborhoodErrorMessage,
      postalCodeErrorMessage,
      streetErrorMessage,
      numberAddressErrorMessage,
    },
  } = props;

  return (
    <>
      <fieldset>
        <legend>Seus dados de endereço</legend>

        <Select
          label="Estado*"
          name="state"
          values={states}
          value={state}
          handleSelection={handleFieldChange}
          handleFieldValidation={handleFieldValidation}
        />
        <FormErrorMessage message={stateErrorMessage} />

        <Input
          label="Cidade*"
          name="city"
          type="text"
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("city", event, "cidade");
          }}
          value={city}
          default={city}
        />
        <FormErrorMessage message={cityErrorMessage} />

        <Input
          label="Bairro*"
          name="neighborhood"
          type="text"
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("neighborhood", event, "cidade");
          }}
          value={neighborhood}
          default={neighborhood}
        />
        <FormErrorMessage message={neighborhoodErrorMessage} />

        <Input
          label="CEP*"
          name="postalCode"
          type="text"
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("postalCode", event, "CEP");
          }}
          value={postalCode}
          default={postalCode}
        />
        <FormErrorMessage message={postalCodeErrorMessage} />

        <Input
          label="Endereço*"
          name="street"
          type="text"
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("street", event, "endereço");
          }}
          value={street}
          default={street}
        />
        <FormErrorMessage message={streetErrorMessage} />

        <Input
          label="Número*"
          name="numberAddress"
          type="text"
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("numberAddress", event, "número");
          }}
          value={numberAddress}
          default={numberAddress}
        />
        <FormErrorMessage message={numberAddressErrorMessage} />

        <Input
          label="Complemento"
          name="complement"
          type="text"
          onChange={handleFieldChange}
          value={complement}
          default={complement}
        />
      </fieldset>
    </>
  );
};

FormProviderAddress.propTypes = {
  values: PropTypes.shape({
    state: PropTypes.string,
    city: PropTypes.string,
    neighborhood: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string,
    complement: PropTypes.string,
    numberAddress: PropTypes.string,
  }).isRequired,

  validationMessages: PropTypes.shape({
    stateErrorMessage: PropTypes.string,
    cityErrorMessage: PropTypes.string,
    neighborhoodErrorMessage: PropTypes.string,
    postalCodeErrorMessage: PropTypes.string,
    streetErrorMessage: PropTypes.string,
    numberAddressErrorMessage: PropTypes.string,
  }).isRequired,

  handleFieldChange: PropTypes.func.isRequired,
  handleFieldValidation: PropTypes.func.isRequired,
};

export default FormProviderAddress;
