import { useState } from "react";

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

  const handleFieldChange = (event) => {
    event.preventDefault();
    setStateAbb("");
  };

  const handleCityIncrement = () => {
    const adRegistrationObjectClone = { ...adRegistrationObject };
    adRegistrationObjectClone.cities.push({
      stateAbb: "",
      cityName: "",
      regionArea: [
        {
          areaName: "",
        },
      ],
    });
    setAdRegistrationObject(adRegistrationObjectClone);
  };

  const handleRegionAreaIncrement = (event, cityIndex) => {
    const adRegistrationObjectClone = { ...adRegistrationObject };

    adRegistrationObjectClone.cities[cityIndex].regionArea.push({
      areaName: "",
    });

    setAdRegistrationObject(adRegistrationObjectClone);
  };

  const handleRegionAreaDecrement = (event, cityIndex, regionAreaIndex) => {
    const adRegistrationObjectClone = { ...adRegistrationObject };
    adRegistrationObjectClone.cities[cityIndex].regionArea.splice(
      regionAreaIndex,
      1
    );
    setAdRegistrationObject(adRegistrationObjectClone);
  };

  return {
    adRegistrationObject,
    stateAbb,
    handleFieldChange,
    handleCityIncrement,
    handleRegionAreaIncrement,
    handleRegionAreaDecrement,
  };
};

export default useAdRegistrationHook;
