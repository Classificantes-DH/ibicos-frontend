import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import FormErrorMessage from "./FormErrorMessage";

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
          label="Nome Completo*"
          name="namePerson"
          type="text"
          value={namePerson}
          default={namePerson}
          onChange={handleFieldChange}
        />
        <FormErrorMessage
          fieldName="namePerson"
          fieldValue={namePerson}
          fieldNamePTBR="nome"
        />

        <Input
          label="Data de nascimento*"
          name="birthday"
          type="date"
          value={birthday}
          default={birthday}
          onChange={handleFieldChange}
        />

        <FormErrorMessage
          fieldName="birthday"
          fieldValue={birthday}
          fieldNamePTBR="data de nascimento"
        />

        <Input
          label="CPF*"
          name="cpf"
          type="text"
          value={cpf}
          default={cpf}
          onChange={handleFieldChange}
        />
        <FormErrorMessage
          fieldName="cpf"
          fieldValue={cpf}
          fieldNamePTBR="CPF"
        />

        <Input
          label="CNPJ"
          name="cnpj"
          type="text"
          value={cnpj}
          default={cnpj}
          onChange={handleFieldChange}
        />
        <FormErrorMessage
          fieldName="cnpj"
          fieldValue={cnpj}
          fieldNamePTBR="CNPJ"
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
