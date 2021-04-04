import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext/SessionContext";
import api from "../api/api";

const useCustomerEvaluateHook = () => {
  const { userInfo } = useContext(SessionContext);
  const { id } = userInfo;
  const [pendingEvaluationsData, setPendingEvaluationData] = useState([]);

  const pendingEvaluationsEndpoint = `/api/v1/customer/evaluate/${id}/pending/evaluation`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(pendingEvaluationsEndpoint);
      const { pendingEvaluations } = await response.data;
      setPendingEvaluationData(pendingEvaluations);
    };

    fetchData();
  }, []);

  const handleJobConfirmation = async (idEvaluate) => {
    const response = await api.put(
      "/api/v1/customer/evaluate/provider/confirmHiring",
      JSON.stringify({ id_evaluate: idEvaluate })
    );
    console.log(response);
  };

  return { pendingEvaluationsData, handleJobConfirmation };
};

export default useCustomerEvaluateHook;
