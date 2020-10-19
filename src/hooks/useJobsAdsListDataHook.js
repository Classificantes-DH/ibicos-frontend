import { useEffect, useState } from "react";
import mockedData from "./mockedData/jobs-list-page1.json";

const useJobsAdsListDataHook = (query, pageNumber) => {
  const [adsList, setAdsList] = useState({});
  const [orderBy, setOrderBy] = useState("id");

  const handleOrderByChange = (event) => {
    const { target } = event;
    const selectedValue = target.options[target.selectedIndex].value;
    setOrderBy(selectedValue);

    const sortedAdsList = JSON.parse(JSON.stringify(adsList));

    if (sortedAdsList.results) {
      sortedAdsList.results.sort((a, b) => b[orderBy] - a[orderBy]);
      setAdsList(sortedAdsList);
    }
  };

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
  return { adsList, handleOrderByChange };
};

export default useJobsAdsListDataHook;
