import { useState, useEffect } from "react";

const useProviderSignupHook = () => {
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
  const [regions, setRegions] = useState([{ regionName: "Região Teste" }]);
  const [services, setServices] = useState([{ serviceName: "Serviço Teste" }]);
  const [progressImg, setProgressImg] = useState("");

  const maxStep = 4;

  useEffect(() => {
    const fetchProgressImg = async () => {
      const img = (
        await import(`../resources/imgs/styleSvgs/pending_${currentStep}.svg`)
      ).default;

      setProgressImg(img);
    };

    fetchProgressImg();
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1);
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
    console.log({
      ...fields,
      regions: [...regions],
      services: [...services],
    });
  };

  const addRegion = () => {
    setRegions([...regions, { regionName: "" }]);
  };

  const addService = () => {
    setServices([...services, { serviceName: "" }]);
  };

  return {
    currentStep,
    fields,
    regions,
    services,
    progressImg,
    handleNextStep,
    handlePreviousStep,
    handleFieldChange,
    handleSubmit,
    addRegion,
    addService,
  };
};

export default useProviderSignupHook;
