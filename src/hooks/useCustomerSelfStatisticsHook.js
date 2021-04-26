import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { SessionContext } from "../context/SessionContext/SessionContext";

const useCustomerSelfStatisticsHook = () => {
  const {
    userInfo: { id },
  } = useContext(SessionContext);

  const [customerSelfStatistics, setCustomerSelfStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `/api/v1/customer/statistics/${id}/user-data`
      );
      const {
        data: { customer_statistics: customerStatisticsFetchData },
      } = response;
      setCustomerSelfStatistics(customerStatisticsFetchData);
    };

    fetchData();
  }, []);

  return { customerSelfStatistics };
};

export default useCustomerSelfStatisticsHook;
