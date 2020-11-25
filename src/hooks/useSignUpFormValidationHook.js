import { useState, useEffect } from "react";

const useFormValidationHook = (
  fieldValue,
  fieldName,
  fieldNamePTBR = fieldName
) => {
  const [validationMessages, setValidationMessages] = useState({
    emailErrorMessage: "",
    passwordUserErrorMessage: "",
    namePersonErrorMessage: "",
    birthdayErrorMessage: "",
    cpfErrorMessage: "",
    cnpjErrorMessage: "",
    postalCodeErrorMessage: "",
    streetErrorMessage: "",
    numberAddressErrorMessage: "",
    neighborhoodErrorMessage: "",
    cityErrorMessage: "",
    stateErrorMessage: "",
  });

  const setFieldErrorMessage = (validatedMessageName, message) => {
    setValidationMessages({
      ...validationMessages,
      [validatedMessageName]: message,
    });
  };

  useEffect(() => {
    setFieldErrorMessage(`${fieldName}ErrorMessage`, "");

    switch (fieldName) {
      case "email":
        if (!fieldValue.includes("@")) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            "Insira um email em formato válido"
          );
        } else if (fieldValue.length < 3) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            "O campo email precisa de ao menos 3 caracteres"
          );
        }
        break;

      case "cpf":
        if (fieldValue.length !== 11) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR}
          precisa conter exatamente 11 dígitos`
          );
        } else if (!/^[0-9]*$/.test(fieldValue)) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR} só pode conter números`
          );
        }
        break;

      case "cnpj":
        if (fieldValue.length !== 0) {
          if (fieldValue.length !== 14) {
            setFieldErrorMessage(
              `${fieldName}ErrorMessage`,
              `O campo ${fieldNamePTBR}
          precisa conter exatamente 14 dígitos`
            );
          } else if (!/^[0-9]*$/.test(fieldValue)) {
            setFieldErrorMessage(
              `${fieldName}ErrorMessage`,
              `O campo ${fieldNamePTBR} só pode conter números`
            );
          }
        }
        break;

      case "birthday":
        if (fieldValue.length === 0) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O ${fieldNamePTBR} é de preenchimento obrigatório`
          );
        } else {
          const ageInMilliseconds = Date.now() - new Date(fieldValue);
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

      default:
        if (fieldValue.length === 0) {
          setFieldErrorMessage(
            `${fieldName}ErrorMessage`,
            `O campo ${fieldNamePTBR} não pode estar vazio`
          );
        } else {
          setFieldErrorMessage(`${fieldName}ErrorMessage`, "");
        }
    }
  }, [fieldValue, fieldName, fieldNamePTBR]);

  return { validationMessages };
};

export default useFormValidationHook;
