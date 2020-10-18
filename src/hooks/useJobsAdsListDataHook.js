import { useEffect, useState } from "react";
import mockedData from "./mockedData/jobs-list-page1.json";

const useJobsAdsListDataHook = (query, pageNumber) => {
  const [adsList, setAdsList] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // #TODO: Real data fetching
      // const response = await fetch("url");
      // const data = await response.json();
      // setAdsList(data);
    };
    setAdsList(mockedData);
    fetchData();
  }, [query, pageNumber]);
  return { adsList };
};

export default useJobsAdsListDataHook;
