import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

const FormProviderDetails = (props) => {
  const {
    values: { namePerson, birthday, cpf, cnpj },
    handleFieldChange,
  } = props;

  return (
    <>
      <fieldset>
        <legend>Seus dados de identificação</legend>

        <Input
          label="Nome"
          name="namePerson"
          type="text"
          value={namePerson}
          default={namePerson}
          onChange={handleFieldChange}
        />
        <Input
          label="Data de nascimento"
          name="birthday"
          type="date"
          value={birthday}
          default={birthday}
          onChange={handleFieldChange}
        />
        <Input
          label="CPF"
          name="cpf"
          type="text"
          value={cpf}
          default={cpf}
          onChange={handleFieldChange}
        />
        <Input
          label="CNPJ"
          name="cnpj"
          type="text"
          value={cnpj}
          default={cnpj}
          onChange={handleFieldChange}
        />
      </fieldset>
    </>
  );
};

FormProviderDetails.propTypes = {
  values: PropTypes.shape({
    namePerson: PropTypes.string,
    birthday: PropTypes.string,
    cpf: PropTypes.string,
    cnpj: PropTypes.string,
  }).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormProviderDetails;
