import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

import FormErrorMessage from "./FormErrorMessage";

const FormUser = (props) => {
  const {
    values: { email, passwordUser, notice },
    handleFieldChange,
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
          onChange={handleFieldChange}
        />
        <FormErrorMessage fieldValue={email} fieldName="email" />

        <Input
          label="Senha*"
          name="passwordUser"
          type="password"
          value={passwordUser}
          default={passwordUser}
          onChange={handleFieldChange}
        />
        <FormErrorMessage
          fieldValue={passwordUser}
          fieldName="passwordUser"
          fieldNamePTBR="senha"
        />

        <Input
          label="Emite nota-fiscal"
          name="notice"
          type="checkbox"
          value={notice}
          default={notice}
          onChange={handleFieldChange}
        />
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
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormUser;
