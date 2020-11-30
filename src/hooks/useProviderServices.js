import { useState, useContext, useEffect } from "react";

import { SessionContext } from "../context/SessionContext/SessionContext";
import api from "../api/api";

const useProviderServices = () => {
  const { userInfo } = useContext(SessionContext);
  const [id] = useState(userInfo ? userInfo.id : null);

  const [providerAds, setProviderAds] = useState([]);
  const [providerName] = useState(userInfo.person.namePerson);

  useEffect(() => {
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
  }, []);

  return { providerAds, providerName };
};

export default useProviderServices;
