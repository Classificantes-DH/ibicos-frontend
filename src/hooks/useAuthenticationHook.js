import { useState, useEffect } from "react";
import api from "../api/api";

const useAuthenticationHook = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [autheticationErrorMessage, setAutheticationErrorMessage] = useState(
    ""
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

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

      localStorage.setItem("token", JSON.stringify(token));

      setIsUserAuthenticated(true);
    } catch (err) {
      setAutheticationErrorMessage("Email ou senha incorretos");
    }
  };

  return { isUserAuthenticated, handleLogin, autheticationErrorMessage };
};

export default useAuthenticationHook;
