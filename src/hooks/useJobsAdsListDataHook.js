import { useEffect, useState } from "react";
import mockedData from "./mockedData/jobs-list-page1.json";

const useJobsAdsListDataHook = (query, pageNumber) => {
  const [adsList, setAdsList] = useState({});
  const [orderBy, setOrderBy] = useState("id");
  const [filteringParameters, setFilteringParameters] = useState({
    category: "",
    state: "",
    cities: "",
    regions: "",
  });

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
    setOrderBy(selectedValue);
  };

  /*
    This is just a mockup that needs to be altered using real back-end for fetching data
  */
  useEffect(() => {
    const sortedAdsList = JSON.parse(JSON.stringify(mockedData));
    if (!sortedAdsList.results) return;
    const { results } = sortedAdsList;

    const filteredResult = results.filter((result) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in filteringParameters) {
        if (Object.prototype.hasOwnProperty.call(filteringParameters, key)) {
          if (
            key !== "regions" &&
            key !== "cities" &&
            !result[key].includes(filteringParameters[key])
          ) {
            return false;
          }

          if (key === "cities" || key === "regions") {
            // eslint-disable-next-line no-restricted-syntax
            for (const location of result.cities) {
              if (location.name.includes(filteringParameters.cities)) {
                if (!filteringParameters.regions) return true;
                // eslint-disable-next-line no-console
                console.log(filteringParameters.regions);
                // eslint-disable-next-line no-unused-vars
                // eslint-disable-next-line no-restricted-syntax
                for (const region of location.regions) {
                  if (region.includes(filteringParameters.regions)) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }

      return false;
    });

    sortedAdsList.results = filteredResult;

    sortedAdsList.results.sort((a, b) => b[orderBy] - a[orderBy]);
    setAdsList(sortedAdsList);
    // eslint-disable-next-line
  }, [orderBy, filteringParameters]);

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

  return {
    adsList,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
  };
};

export default useJobsAdsListDataHook;
