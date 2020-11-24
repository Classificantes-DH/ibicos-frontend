import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

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

        <Input
          label="Estado"
          name="state"
          type="text"
          onChange={handleFieldChange}
          value={state}
          default={state}
        />
        <Input
          label="Cidade"
          name="city"
          type="text"
          onChange={handleFieldChange}
          value={city}
          default={city}
        />
        <Input
          label="Bairro"
          name="neighborhood"
          type="text"
          onChange={handleFieldChange}
          value={neighborhood}
          default={neighborhood}
        />
        <Input
          label="CEP"
          name="postalCode"
          type="text"
          onChange={handleFieldChange}
          value={postalCode}
          default={postalCode}
        />
        <Input
          label="Endereço"
          name="street"
          type="text"
          onChange={handleFieldChange}
          value={street}
          default={street}
        />
        <Input
          label="Número"
          name="numberAddress"
          type="text"
          onChange={handleFieldChange}
          value={numberAddress}
          default={numberAddress}
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
