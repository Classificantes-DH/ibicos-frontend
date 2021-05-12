import React from "react";
import PropTypes from "prop-types";
import styles from "./BroadFilter.module.scss";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import { useServiceCategoryHook } from "../../../hooks/index";

const BroadFilter = ({
  handleBroadFilterChange,
  filteringParameters,
  states,
  cities,
  handleSelectedStateUpdate,
}) => {
  const { stateName, cityName } = filteringParameters;
  const { serviceCategories } = useServiceCategoryHook();

  // @TODO: get regions generated from backend
  const regionAreas = ["Zona Sul", "Zona Leste", "Zona Oeste", "Zona Norte"];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.filtersContainer}>
        <Filter
          handleSelectChange={(event) =>
            handleBroadFilterChange(event, "categoryName")
          }
          options={serviceCategories.map(({ categoryName }) => ({
            title: categoryName,
            value: categoryName,
          }))}
          title="Categoria"
        />

        <Filter
          handleSelectChange={(event) => {
            handleBroadFilterChange(event, "stateName");
            handleSelectedStateUpdate(event);
          }}
          options={states.map(({ nome, sigla }) => ({
            title: nome,
            value: sigla,
          }))}
          title="Estado"
        />

        <Filter
          handleSelectChange={(event) =>
            handleBroadFilterChange(event, "cityName")
          }
          options={cities.map((city) => ({
            title: city,
            value: city,
          }))}
          title="Cidade"
          disabled={!stateName}
        />

        <Filter
          handleSelectChange={(event) =>
            handleBroadFilterChange(event, "areaName")
          }
          options={regionAreas.map((region) => ({
            title: region,
            value: region,
          }))}
          title="Região"
          disabled={!cityName}
        />
      </div>
    </div>
  );
};

BroadFilter.propTypes = {
  handleBroadFilterChange: PropTypes.func.isRequired,

  states: PropTypes.arrayOf({
    nome: PropTypes.string.isRequired,
    sigla: PropTypes.string.isRequired,
  }).isRequired,

  cities: PropTypes.arrayOf({
    city: PropTypes.string.isRequired,
  }).isRequired,

  handleSelectedStateUpdate: PropTypes.func.isRequired,

  filteringParameters: PropTypes.shape({
    categoryName: PropTypes.string,
    stateName: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    areaName: PropTypes.string,
  }).isRequired,
};

export default BroadFilter;
