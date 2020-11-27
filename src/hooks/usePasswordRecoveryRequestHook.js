import { useState } from "react";
import api from "../api/api";

const usePasswordRecoveryRequestHook = () => {
  const [email, setEmail] = useState("");
  const [hasRecoveryRequestErrors, setHasRecoveryRequestErrors] = useState(
    false
  );
  const [
    isRecoveryRequestSuccessfull,
    setIsRecoveryRequestSuccessfull,
  ] = useState(false);

  const handleInputChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordRecoveryRequest = async (event) => {
    event.preventDefault();

    try {
      await api.post("/resetPassword/request", JSON.stringify({ email }));

      setIsRecoveryRequestSuccessfull(true);
      setHasRecoveryRequestErrors(false);
    } catch (error) {
      setHasRecoveryRequestErrors(true);
    }
  };

  return {
    email,
    hasRecoveryRequestErrors,
    isRecoveryRequestSuccessfull,
    handleInputChange,
    handlePasswordRecoveryRequest,
  };
};

export default usePasswordRecoveryRequestHook;
