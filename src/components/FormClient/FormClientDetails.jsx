import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import FormErrorMessage from "./FormErrorMessage";

import { Checkbox } from "../index";

const FormProviderDetails = (props) => {
  const {
    values: { namePerson, birthday, cpf, cnpj, notice },
    handleFieldChange,
    validationMessages: {
      namePersonErrorMessage,
      birthdayErrorMessage,
      cpfErrorMessage,
      cnpjErrorMessage,
    },
    handleFieldValidation,
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
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("namePerson", event, "nome");
          }}
        />
        <FormErrorMessage message={namePersonErrorMessage} />

        <Input
          label="Data de nascimento*"
          name="birthday"
          type="date"
          value={birthday}
          default={birthday}
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("birthday", event, "data de nascimento");
          }}
        />
        <FormErrorMessage message={birthdayErrorMessage} />

        <Input
          label="CPF*"
          name="cpf"
          type="text"
          value={cpf}
          default={cpf}
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("cpf", event, "CPF");
          }}
        />
        <FormErrorMessage message={cpfErrorMessage} />

        {/* <Input
          label="Emite nota-fiscal"
          name="notice"
          type="checkbox"
          value={notice}
          default={notice}
          onChange={handleFieldChange}
        /> */}

        <Checkbox
          label="Emite nota fiscal?"
          name="notice"
          onChangeHandler={handleFieldChange}
          value={notice}
        />
        {/* label, name, onChangeHandler, value */}
        <Input
          label="CNPJ"
          name="cnpj"
          type="text"
          value={cnpj}
          default={cnpj}
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("cnpj", event, "CNPJ");
          }}
        />
        <FormErrorMessage message={cnpjErrorMessage} />
      </fieldset>
    </>
  );
};

FormProviderDetails.propTypes = {
  values: PropTypes.shape({
    namePerson: PropTypes.string,
    birthday: PropTypes.string,
    notice: PropTypes.bool,
    cpf: PropTypes.string,
    cnpj: PropTypes.string,
  }).isRequired,

  validationMessages: PropTypes.shape({
    namePersonErrorMessage: PropTypes.string,
    birthdayErrorMessage: PropTypes.string,
    cpfErrorMessage: PropTypes.string,
    cnpjErrorMessage: PropTypes.string,
  }).isRequired,

  handleFieldChange: PropTypes.func.isRequired,
  handleFieldValidation: PropTypes.func.isRequired,
};

export default FormProviderDetails;
