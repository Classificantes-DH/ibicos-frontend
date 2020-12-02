import { useEffect, useState, useContext } from "react";

import api from "../api/api";

import { SessionContext } from "../context/SessionContext/SessionContext";

const _ = require("lodash");

const useAdRegistrationHook = () => {
  const { userInfo } = useContext(SessionContext);

  const [id] = useState(userInfo ? userInfo.id : null);

  const initialAdRegistrationState = {
    adDescription: "",
    user: {
      id,
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
  };
  const [stateAbb, setStateAbb] = useState("");
  const [isAdSuccessfullyRegistered, setIsAdSuccessfullyRegistered] = useState(
    false
  );

  const [adRegistrationObject, setAdRegistrationObject] = useState(
    _.cloneDeep(initialAdRegistrationState)
  );

  const handleResetOfIsAdSuccessfullyRegistered = () => {
    setIsAdSuccessfullyRegistered(false);
  };

  const handleFormSubmition = async (event) => {
    event.preventDefault();

    console.log(adRegistrationObject);
    try {
      await api.post("/api/v1/ad/create", JSON.stringify(adRegistrationObject));
      setIsAdSuccessfullyRegistered(true);
      setAdRegistrationObject(_.cloneDeep(initialAdRegistrationState));
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
    handleResetOfIsAdSuccessfullyRegistered();
    setStateAbb(value);
  };

  const handleBasePropertiesChange = ({ target: { name, value } }) => {
    handleResetOfIsAdSuccessfullyRegistered();
    setAdRegistrationObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCityIncrement = () => {
    handleResetOfIsAdSuccessfullyRegistered();
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
    handleResetOfIsAdSuccessfullyRegistered();
    const clonedObject = _.cloneDeep(adRegistrationObject);
    clonedObject.cities[cityIndex].regionArea.push({
      areaName: "",
    });

    setAdRegistrationObject(clonedObject);
  };

  const handleRegionAreaDecrement = (event, cityIndex, regionAreaIndex) => {
    handleResetOfIsAdSuccessfullyRegistered();
    const clonedObject = _.cloneDeep(adRegistrationObject);

    clonedObject.cities[cityIndex].regionArea.splice(regionAreaIndex, 1);

    setAdRegistrationObject(clonedObject);
  };

  const handleServiceCategoryChange = ({ target: { value } }) => {
    handleResetOfIsAdSuccessfullyRegistered();
    setAdRegistrationObject((prevState) => {
      const newState = { ...prevState };
      newState.serviceCategory.id = value;

      return newState;
    });
  };

  const handleCitiesChange = ({ target: { value, name } }, cityIndex) => {
    handleResetOfIsAdSuccessfullyRegistered();
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
    handleResetOfIsAdSuccessfullyRegistered();
    setAdRegistrationObject((prevState) => {
      const newState = { ...prevState };
      newState.cities[cityIndex].regionArea[regionIndex].areaName = value;
      return newState;
    });
  };

  return {
    adRegistrationObject,
    stateAbb,
    isAdSuccessfullyRegistered,
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
