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
    await api.put(
      "/api/v1/customer/evaluate/provider/confirmHiring",
      JSON.stringify({ id_evaluate: idEvaluate })
    );
  };

  const handleJobDeletion = async (idEvaluate) => {
    await api.delete(`/api/v1/customer/evaluate/delete/${idEvaluate}`);
    const newPendingEvaluationsData = pendingEvaluationsData.filter(
      (ped) => ped.idEvaluate !== idEvaluate
    );

    setPendingEvaluationData(newPendingEvaluationsData);
  };

  return { pendingEvaluationsData, handleJobConfirmation, handleJobDeletion };
};

export default useCustomerEvaluateHook;