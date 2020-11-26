import { useState } from "react";

const useSignUpFormValidationHook = () => {
  const [validationMessages, setValidationMessages] = useState({
    emailErrorMessage: "O campo é de preenchimento obrigatório",
    passwordUserErrorMessage: "O campo é de preenchimento obrigatório",
    stateErrorMessage: "O campo é de preenchimento obrigatório",
    cityErrorMessage: "O campo é de preenchimento obrigatório",
    neighborhoodErrorMessage: "O campo é de preenchimento obrigatório",
    postalCodeErrorMessage: "O campo é de preenchimento obrigatório",
    streetErrorMessage: "O campo é de preenchimento obrigatório",
    numberAddressErrorMessage: "O campo é de preenchimento obrigatório",
    namePersonErrorMessage: "O campo é de preenchimento obrigatório",
    birthdayErrorMessage: "O campo é de preenchimento obrigatório",
    cpfErrorMessage: "O campo é de preenchimento obrigatório",
    cnpjErrorMessage: "O campo é de preenchimento obrigatório",
  });

  const setFieldErrorMessage = (validatedMessageName, message) => {
    setValidationMessages({
      ...validationMessages,
      [validatedMessageName]: message,
    });
  };

  const handleFieldValidation = (
    fieldName,
    { target: { value } },
    fieldNamePTBR = fieldName
  ) => {
    setFieldErrorMessage(`${fieldName}ErrorMessage`, "");

    switch (fieldName) {
      case "email":
        if (!value.includes("@")) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            "Insira um email em formato válido"
          );
        } else if (value.length < 3) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            "O campo email precisa de ao menos 3 caracteres"
          );
        }
        break;

      case "cpf":
        if (value.length !== 11) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR}
          precisa conter exatamente 11 dígitos`
          );
        } else if (!/^[0-9]*$/.test(value)) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR} só pode conter números`
          );
        }
        break;

      case "cnpj":
        if (value.length !== 0) {
          if (value.length !== 14) {
            setFieldErrorMessage(
              `${fieldName}ErrorMessage`,
              `O campo ${fieldNamePTBR}
          precisa conter exatamente 14 dígitos`
            );
          } else if (!/^[0-9]*$/.test(value)) {
            setFieldErrorMessage(
              `${fieldName}ErrorMessage`,
              `O campo ${fieldNamePTBR} só pode conter números`
            );
          }
        }
        break;

      case "birthday":
        if (value.length === 0) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `A ${fieldNamePTBR} é de preenchimento obrigatório`
          );
        } else {
          const ageInMilliseconds = Date.now() - new Date(value);
          const ageInEpoch = new Date(ageInMilliseconds);
          const ageInYears = Math.abs(ageInEpoch.getUTCFullYear() - 1970);

          if (ageInYears < 18) {
            setFieldErrorMessage(
              `${fieldName}ErrorMessage`,
              `É necessário ter mais de 18 anos para utilizar a plataforma`
            );
          }
        }

        break;

      case "state":
        if (value === "") {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `Selecione um ${fieldNamePTBR}`
          );
        }
        break;

      default:
        if (value.length === 0) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR} é de preenchimento obrigatório`
          );
        } else {
          setFieldErrorMessage(`${fieldName}ErrorMessage`, "");
        }
    }
  };

  return { validationMessages, handleFieldValidation };
};

export default useSignUpFormValidationHook;
