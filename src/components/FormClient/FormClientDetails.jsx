import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

const FormProviderDetails = (props) => {
  const {
    values: { name, email, telephone, nickname, cpfCnpj },
    handleFieldChange,
  } = props;

  return (
    <>
      <fieldset>
        <legend>Seus dados de identificação</legend>

        <Input
          label="Nome"
          name="name"
          type="text"
          value={name}
          default={name}
          onChange={handleFieldChange}
        />
        <Input
          label="E-Mail"
          name="email"
          type="email"
          value={email}
          default={email}
          onChange={handleFieldChange}
        />
        <Input
          label="Celular"
          name="telephone"
          type="tel"
          value={telephone}
          default={telephone}
          onChange={handleFieldChange}
        />
        <Input
          label="Apelido"
          name="nickname"
          type="text"
          value={nickname}
          default={nickname}
          onChange={handleFieldChange}
        />
        <Input
          label="CPF/CNPJ"
          name="cpfCnpj"
          type="text"
          value={cpfCnpj}
          default={cpfCnpj}
          onChange={handleFieldChange}
        />
      </fieldset>
    </>
  );
};

FormProviderDetails.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    nickname: PropTypes.string,
    cpfCnpj: PropTypes.string,
  }).isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormProviderDetails;
