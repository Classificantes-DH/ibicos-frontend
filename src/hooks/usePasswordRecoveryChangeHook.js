import { useState } from "react";

import api from "../api/api";

const usePasswordRecoveryChangeHook = () => {
  const [newPassword, setNewPassword] = useState("");
  const [
    isRecoveryRequestSuccessfull,
    setIsRecoveryRequestSuccessfull,
  ] = useState(false);
  const [hasRecoveryRequestErrors, setHasRecoveryRequestErrors] = useState(
    false
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = ({ target: { value } }) => {
    setNewPassword(value);
  };

  const handlePasswordRequestChange = async (event, accountRecoveryToken) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await api.post(
        "/resetPassword/change",
        JSON.stringify({ accountRecoveryToken, newPassword })
      );

      setHasRecoveryRequestErrors(false);
      setIsRecoveryRequestSuccessfull(true);
    } catch (err) {
      setHasRecoveryRequestErrors(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    newPassword,
    hasRecoveryRequestErrors,
    isRecoveryRequestSuccessfull,
    handleInputChange,
    handlePasswordRequestChange,
  };
};

export default usePasswordRecoveryChangeHook;
