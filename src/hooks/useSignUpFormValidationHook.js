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
        } else {
          // TODO CHECK IF EMAIL IS IN USE
          setFieldErrorMessage(`${fieldName}ErrorMessage`, "");
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
  }, [fieldValue, fieldName]);

  return { validationMessages };
};

export default useFormValidationHook;
