import { useEffect, useState } from "react";

import api from "../api/api";
import useLocationHook from "./useLocationHook";

const useJobsAdsListDataHook = ({ pageNumber }) => {
  const [adsList, setAdsList] = useState([]);
  const { states, cities, handleSelectedStateUpdate } = useLocationHook();

  const [filteringParameters, setFilteringParameters] = useState({
    categoryName: "",
    stateName: "",
    cityName: "",
    areaName: "",
  });
  const [totalAds, setTotalAds] = useState(0);

  const { categoryName, stateName, cityName, areaName } = filteringParameters;

  const [hasMore, setHasMore] = useState(false);

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
    setAdsList([]);
  }, [filteringParameters]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/v1/ad/list/ad/filter", {
          params: {
            categoryName,
            stateName,
            cityName,
            areaName,
            page: pageNumber,
          },
        });
        const {
          last,
          data: { content, totalElements },
        } = await response;

        setAdsList((prevAds) => {
          return [...new Set([...prevAds, ...content])];
        });
        setHasMore(!last);

        setTotalAds(totalElements);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [pageNumber, filteringParameters]);

  return {
    states,
    cities,
    adsList,
    totalAds,
    hasMore,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
    handleSelectedStateUpdate,
  };
};

export default useJobsAdsListDataHook;
