import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../api/api";

const useAuthenticationHook = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isCredentialInvalid, setIsCredentialInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsUserAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { target } = event;
    const email = target[0].value;
    const passwordUser = target[1].value;

    try {
      const response = await api.post(
        "/login",
        JSON.stringify({ email, passwordUser })
      );

      const {
        data: { token },
      } = await response;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem("token", token);

      setIsUserAuthenticated(true);
      setIsCredentialInvalid(false);
      history.push({
        pathname: "/listaClassificados",
      });
    } catch (err) {
      setIsCredentialInvalid(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsUserAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.Authorization = undefined;
    history.push({ pathname: "/login" });
  };

  return {
    isUserAuthenticated,
    handleLogin,
    isCredentialInvalid,
    isLoading,
    handleLogout,
  };
};

export default useAuthenticationHook;
