import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { SessionContext } from "../context/SessionContext/SessionContext";

const useProviderSelfStatisticsHook = () => {
  const {
    userInfo: { id },
  } = useContext(SessionContext);

  const [providerSelfStatistics, setProviderSelfStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `/api/v1/provider/statistics/${id}/user-data`
      );
      const {
        data: { provider_statistics: provicerStatisticsFetchData },
      } = response;
      setProviderSelfStatistics(provicerStatisticsFetchData);
    };

    fetchData();
  }, []);

  return { providerSelfStatistics };
};

export default useProviderSelfStatisticsHook;
