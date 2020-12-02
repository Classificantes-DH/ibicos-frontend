import { useEffect, useState, useCallback, useRef } from "react";

import api from "../api/api";
import useLocationHook from "./useLocationHook";

const useJobsAdsListDataHook = () => {
  const [adsList, setAdsList] = useState([]);
  const { states, cities, handleSelectedStateUpdate } = useLocationHook();

  const [pageNumber, setPageNumber] = useState(0);

  const [filteringParameters, setFilteringParameters] = useState({
    categoryName: "",
    stateName: "",
    cityName: "",
    areaName: "",
  });
  const [totalAds, setTotalAds] = useState(0);

  const { categoryName, stateName, cityName, areaName } = filteringParameters;

  const [hasMore, setHasMore] = useState(false);

  const observer = useRef();

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
    console.log(selectedValue);
  };

  const lastAdElementRef = useCallback(
    (node) => {
      if (!adsList) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    setAdsList([]);
    setPageNumber(0);
    setHasMore(false);
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
          data: { content, totalElements, last },
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
    lastAdElementRef,
    handleOrderByChange,
    handleBroadFilterChange,
    handleSelectedStateUpdate,
  };
};

export default useJobsAdsListDataHook;
