import { useState, useEffect } from "react";

const useLocationHook = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchState = async () => {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const statesData = await response.json();
      const statesNameAndAbb = statesData.map(({ nome, sigla }) => {
        const data = { nome, sigla };
        return data;
      });

      setStates(statesNameAndAbb);
    };

    fetchState();
  }, []);

  const handleSelectedStateUpdate = async (event) => {
    const { target } = event;
    const selectedState = target.options[target.selectedIndex].value;

    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/microrregioes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    const citiesNames = data.map(({ nome }) => {
      const cityData = nome;

      return cityData;
    });

    setCities(citiesNames);
  };

  return { states, cities, handleSelectedStateUpdate };
};

export default useLocationHook;
