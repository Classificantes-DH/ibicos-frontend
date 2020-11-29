import { useEffect, useState } from "react";

import api from "../api/api";

const useJobsAdsListDataHook = (query, pageNumber) => {
  const [adsList, setAdsList] = useState([]);
  // const [orderBy, setOrderBy] = useState("id");
  const [filteringParameters, setFilteringParameters] = useState({
    categoryName: "",
    stateName: "",
    cityName: "",
    areaName: "",
  });

  const { categoryName, stateName, cityName, areaName } = filteringParameters;

  const getSelectedValue = (event) => {
    const { target } = event;
    return target.options[target.selectedIndex].value;
  };

  const handleBroadFilterChange = (event, type) => {
    const selectedValue = getSelectedValue(event);
    setFilteringParameters({
      ...filteringParameters,
      [type]: selectedValue,
    });
  };

  const handleOrderByChange = (event) => {
    const selectedValue = getSelectedValue(event);
    // setOrderBy(selectedValue);
    console.log(selectedValue);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/v1/ad/list/ad/filter", {
          params: {
            categoryName,
            stateName,
            cityName,
            areaName,
          },
        });
        const {
          data: { content },
        } = await response;
        setAdsList(...adsList, content);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query, pageNumber]);

  return {
    adsList,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
  };
};

export default useJobsAdsListDataHook;
