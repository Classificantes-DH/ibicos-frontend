import { useEffect, useState } from "react";
import api from "../api/api";

const useServiceCategoryHook = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/api/v1/service-category");
      const { data } = await response;

      setServiceCategories(data);
    };
    fetchData();
  }, []);

  return { serviceCategories };
};

export default useServiceCategoryHook;
