import { useEffect, useState } from "react";

import api from "../api/api";

const _ = require("lodash");

const useAdRegistrationHook = () => {
  const [adRegistrationObject, setAdRegistrationObject] = useState({
    adDescription: "",
    user: {
      id: 3,
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

  const handleFormSubmition = async (event) => {
    event.preventDefault();
    console.log(adRegistrationObject);
    console.log(JSON.stringify(adRegistrationObject));
    try {
      const response = await api.post(
        "/api/v1/ad/create",
        JSON.stringify(adRegistrationObject)
      );
      console.log(response);
      const { data } = await response;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const clonedObject = _.cloneDeep(adRegistrationObject);
    const { cities } = clonedObject;

    for (let index = 0; index < cities.length; index += 1) {
      cities[index].stateAbb = stateAbb;
    }
    setAdRegistrationObject(clonedObject);
  }, [stateAbb]);

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
      stateAbb,
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
      newState.cities[cityIndex].regionArea[regionIndex].areaName = value;
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
    handleFormSubmition,
  };
};

export default useAdRegistrationHook;
