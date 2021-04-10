import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext/SessionContext";
import api from "../api/api";

const useProviderEvaluateHook = () => {
  const { userInfo } = useContext(SessionContext);
  const { id } = userInfo;
  const [pendingEvaluationsData, setPendingEvaluationData] = useState([]);

  const pendingEvaluationsEndpoint = `/api/v1/provider/evaluate/${id}/pending/evaluation`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(pendingEvaluationsEndpoint);
      const { pendingEvaluations } = await response.data;
      setPendingEvaluationData(pendingEvaluations);
    };

    fetchData();
  }, []);

  const removedPendingEvaluation = (idEvaluate) => {
    const newPendingEvaluationsData = pendingEvaluationsData.filter(
      (ped) => ped.idEvaluate !== idEvaluate
    );

    setPendingEvaluationData(newPendingEvaluationsData);
  };

  const handleRatingChange = async (rate, idEvaluate) => {
    api.put(
      "/api/v1/provider/evaluate/customer",
      JSON.stringify({ evaluation: rate, id_evaluate: idEvaluate })
    );
    removedPendingEvaluation(idEvaluate);
  };

  return {
    pendingEvaluationsData,
    handleRatingChange,
  };
};

export default useProviderEvaluateHook;
