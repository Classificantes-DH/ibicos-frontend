import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

import FormErrorMessage from "./FormErrorMessage";

const FormUser = (props) => {
  const {
    values: { email, passwordUser },
    handleFieldChange,
    handleFieldValidation,
    validationMessages: { emailErrorMessage, passwordUserErrorMessage },
  } = props;

  return (
    <>
      <fieldset>
        <legend>Seus dados de acesso</legend>

        <Input
          label="Email*"
          name="email"
          type="text"
          value={email}
          default={email}
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("email", event);
          }}
        />
        <FormErrorMessage message={emailErrorMessage} />

        <Input
          label="Senha*"
          name="passwordUser"
          type="password"
          value={passwordUser}
          default={passwordUser}
          onChange={(event) => {
            handleFieldChange(event);
            handleFieldValidation("passwordUser", event, "senha");
          }}
        />
        <FormErrorMessage message={passwordUserErrorMessage} />
      </fieldset>
    </>
  );
};

FormUser.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
    notice: PropTypes.bool,
    passwordUser: PropTypes.string,
  }).isRequired,
  validationMessages: PropTypes.shape({
    emailErrorMessage: PropTypes.string,
    passwordUserErrorMessage: PropTypes.string,
  }).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  handleFieldValidation: PropTypes.func.isRequired,
};

export default FormUser;
