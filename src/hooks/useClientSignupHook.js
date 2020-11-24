import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useClientSignupHook = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fields, setFields] = useState({
    email: "",
    passwordUser: "",
    notice: false,
    namePerson: "",
    birthday: "",
    cpf: "",
    cnpj: "",
    postalCode: "",
    street: "",
    numberAddress: "",
    neighborhood: "",
    complement: "",
    city: "",
    state: "",
  });

  const {
    email,
    passwordUser,
    notice,
    namePerson,
    birthday,
    cpf,
    cnpj,
    postalCode,
    street,
    numberAddress,
    neighborhood,
    complement,
    city,
    state,
  } = fields;

  const [progressImg, setProgressImg] = useState("");

  const history = useHistory();

  const maxStep = 3;

  useEffect(() => {
    const fetchProgressImg = async () => {
      const img = (
        await import(
          `../resources/imgs/styleSvgs/client_signup_step_${currentStep}.svg`
        )
      ).default;

      setProgressImg(img);
    };

    fetchProgressImg();
  }, [currentStep]);

  const handleSignUpRequest = async () => {
    const user = {
      email,
      passwordUser,
      notice,
      person: {
        namePerson,
        birthday,
        cpf,
        cnpj,
        address: {
          postalCode,
          street,
          numberAddress,
          neighborhood,
          complement,
          city,
          state,
          cep: postalCode,
        },
      },
    };

    const response = await fetch("http://localhost:8080/signUp", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.status === 201;
  };

  const handleNextStep = async () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === maxStep) {
      const isUserSuccessfullySignedUp = await handleSignUpRequest();

      if (isUserSuccessfullySignedUp) {
        alert("Cadastro efetuado com sucesso");
        history.push({
          pathname: "/cadastroSucesso",
          state: { signupEntityType: "client" },
        });
      } else {
        alert(
          "Ocorreu algo durante o cadastramento, por favor cheque os campos"
        );
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFieldChange = ({ target: { name, value } }) => {
    setFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNextStep();
  };

  return {
    currentStep,
    fields,
    progressImg,
    handleNextStep,
    handlePreviousStep,
    handleFieldChange,
    handleSubmit,
  };
};

export default useClientSignupHook;
