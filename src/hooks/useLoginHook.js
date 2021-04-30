import { useState, useContext } from "react";
import { Context } from "../context/AuthContext/AuthContext";

const useLoginHook = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    passwordUser: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin, isCredentialInvalid } = useContext(Context);

  const handleLoadingToggle = () => {
    setIsLoading(!isLoading);
  };

  const handleFieldChange = ({ target: { value, name } }) => {
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  return {
    isLoading,
    handleLogin,
    loginCredentials,
    isCredentialInvalid,
    handleFieldChange,
    handleLoadingToggle,
  };
};

export default useLoginHook;
