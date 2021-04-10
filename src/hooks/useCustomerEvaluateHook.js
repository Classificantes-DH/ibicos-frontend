import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext/SessionContext";
import api from "../api/api";

const useCustomerEvaluateHook = () => {
  const { userInfo } = useContext(SessionContext);
  const [pendingEvaluationsData, setPendingEvaluationData] = useState([]);

  useEffect(() => {
    const { id } = userInfo;
    const pendingEvaluationsEndpoint = `/api/v1/customer/evaluate/${id}/pending/evaluation`;
    const fetchData = async () => {
      const response = await api.get(pendingEvaluationsEndpoint);
      const { pendingEvaluations } = await response.data;
      setPendingEvaluationData(pendingEvaluations);
    };

    fetchData();
  }, [userInfo]);

  const removedPendingEvaluation = (idEvaluate) => {
    const newPendingEvaluationsData = pendingEvaluationsData.filter(
      (ped) => ped.idEvaluate !== idEvaluate
    );

    setPendingEvaluationData(newPendingEvaluationsData);
  };

  const handleJobConfirmation = async (idEvaluate) => {
    await api.put(
      "/api/v1/customer/evaluate/provider/confirmHiring",
      JSON.stringify({ id_evaluate: idEvaluate })
    );
  };

  const handleJobDeletion = async (idEvaluate) => {
    await api.delete(`/api/v1/customer/evaluate/delete/${idEvaluate}`);
    removedPendingEvaluation(idEvaluate);
  };

  const handleRatingChange = async (rate, idEvaluate) => {
    api.put(
      "/api/v1/customer/evaluate/provider",
      JSON.stringify({ evaluation: rate, id_evaluate: idEvaluate })
    );
    removedPendingEvaluation(idEvaluate);
  };

  return {
    pendingEvaluationsData,
    handleJobConfirmation,
    handleJobDeletion,
    handleRatingChange,
  };
};

export default useCustomerEvaluateHook;
