import { useState } from "react";

const _ = require("lodash");

const useAdRegistrationHook = () => {
  const [adRegistrationObject, setAdRegistrationObject] = useState({
    adDescription: "",
    user: {
      id: null,
    },
    serviceCategory: {
      id: null,
    },
    cities: [
      {
        stateAbb: "",
        cityName: "",
        regionArea: [
          {
            areaName: "",
          },
        ],
      },
    ],
  });

  const [stateAbb, setStateAbb] = useState("");

  const handleStateAbbChange = ({ target: { value } }) => {
    setStateAbb(value);
  };

  const handleBasePropertiesChange = ({ target: { name, value } }) => {
    setAdRegistrationObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCityIncrement = () => {
    const clonedObject = _.cloneDeep(adRegistrationObject);
    clonedObject.cities.push({
      stateAbb: "",
      cityName: "",
      regionArea: [
        {
          areaName: "",
        },
      ],
    });
    setAdRegistrationObject(clonedObject);
  };

  const handleRegionAreaIncrement = (event, cityIndex) => {
    const clonedObject = _.cloneDeep(adRegistrationObject);
    clonedObject.cities[cityIndex].regionArea.push({
      areaName: "",
    });

    setAdRegistrationObject(clonedObject);
  };

  const handleRegionAreaDecrement = (event, cityIndex, regionAreaIndex) => {
    const clonedObject = _.cloneDeep(adRegistrationObject);

    clonedObject.cities[cityIndex].regionArea.splice(regionAreaIndex, 1);

    setAdRegistrationObject(clonedObject);
  };

  const handleServiceCategoryChange = ({ target: { value } }) => {
    setAdRegistrationObject((prevState) => {
      const newState = { ...prevState };
      newState.serviceCategory.id = value;

      return newState;
    });
  };

  const handleCitiesChange = ({ target: { value, name } }, cityIndex) => {
    setAdRegistrationObject((prevState) => {
      const newState = { ...prevState };
      newState.cities[cityIndex][name] = value;
      return newState;
    });
  };

  const handleRegionAreaChange = (
    { target: { value } },
    cityIndex,
    regionIndex
  ) => {
    setAdRegistrationObject((prevState) => {
      const newState = { ...prevState };
      newState.cities[cityIndex].regionArea[regionIndex] = value;
      return newState;
    });
  };

  return {
    adRegistrationObject,
    stateAbb,
    handleRegionAreaChange,
    handleBasePropertiesChange,
    handleStateAbbChange,
    handleCitiesChange,
    handleServiceCategoryChange,
    handleCityIncrement,
    handleRegionAreaIncrement,
    handleRegionAreaDecrement,
  };
};

export default useAdRegistrationHook;
