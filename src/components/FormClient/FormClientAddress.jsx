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
        />
        <FormErrorMessage
          fieldName="estado"
          fieldValue={state}
          fieldNamePTBR="estado"
        />

        <Input
          label="Cidade*"
          name="city"
          type="text"
          onChange={handleFieldChange}
          value={city}
          default={city}
        />
        <FormErrorMessage
          fieldName="city"
          fieldValue={city}
          fieldNamePTBR="cidade"
        />

        <Input
          label="Bairro*"
          name="neighborhood"
          type="text"
          onChange={handleFieldChange}
          value={neighborhood}
          default={neighborhood}
        />
        <FormErrorMessage
          fieldName="neighborhood"
          fieldValue={neighborhood}
          fieldNamePTBR="bairro"
        />

        <Input
          label="CEP*"
          name="postalCode"
          type="text"
          onChange={handleFieldChange}
          value={postalCode}
          default={postalCode}
        />
        <FormErrorMessage
          fieldName="postalCode"
          fieldValue={postalCode}
          fieldNamePTBR="CEP"
        />

        <Input
          label="Endereço*"
          name="street"
          type="text"
          onChange={handleFieldChange}
          value={street}
          default={street}
        />
        <FormErrorMessage
          fieldName="street"
          fieldValue={street}
          fieldNamePTBR="endereço"
        />

        <Input
          label="Número*"
          name="numberAddress"
          type="text"
          onChange={handleFieldChange}
          value={numberAddress}
          default={numberAddress}
        />
        <FormErrorMessage
          fieldName="numberAddress"
          fieldValue={numberAddress}
          fieldNamePTBR="número"
        />

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
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormProviderAddress;
