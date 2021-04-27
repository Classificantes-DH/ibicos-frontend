import { useEffect } from "react";
import api from "../api/api";

const useSignInConfirmationHook = ({ search }) => {
  const params = new URLSearchParams(search);
  const token = params.get("token");

  useEffect(() => {
    const fetchConfirmation = async () => {
      await api.get(`http://localhost:8080/verify?token=${token}`);
    };
    fetchConfirmation();
  }, [token]);
};

export default useSignInConfirmationHook;
