import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useClientSignupHook = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    telephone: "",
    nickname: "",
    cpfCnpj: "",
    state: "",
    city: "",
    neighbourhood: "",
    postalCode: "",
    street: "",
    complement: "",
  });

  const [progressImg, setProgressImg] = useState("");

  const history = useHistory();

  const maxStep = 2;

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

  const handleNextStep = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("cadastro efetuado com sucesso");
      history.push({
        pathname: "/cadastroSucesso",
        state: { signupEntityType: "client" },
      });
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
