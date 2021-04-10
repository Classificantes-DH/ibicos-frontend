import { useState, useContext, useEffect } from "react";

import { SessionContext } from "../context/SessionContext/SessionContext";
import api from "../api/api";

const useProviderServices = () => {
  const { userInfo } = useContext(SessionContext);

  const [providerAds, setProviderAds] = useState([]);
  const [providerName] = userInfo ? userInfo.person.namePerson : "";

  useEffect(() => {
    const id = userInfo ? userInfo.id : null;
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/v1/provider/${id}/ad`);
        const {
          data: { content },
        } = await response;

        setProviderAds(content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userInfo]);

  return { providerAds, providerName };
};

export default useProviderServices;
