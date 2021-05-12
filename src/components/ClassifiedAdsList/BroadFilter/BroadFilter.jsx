import React from "react";
import PropTypes from "prop-types";
import styles from "./BroadFilter.module.scss";
import Filter from "./Filter/Filter";
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
  console.log(serviceCategories);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Filtro</h3>
      </div>
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
        <div className={styles.filter}>
          <h4 className={styles.filterTitle}>
            <span>{">"}</span> Estado
          </h4>
          <div className={styles.selectContainer}>
            <select
              className={styles.mainSelect}
              onChange={(event) => {
                handleBroadFilterChange(event, "stateName");
                handleSelectedStateUpdate(event);
              }}
            >
              <option value="">Qualquer</option>
              {states.map(({ nome, sigla }) => (
                <option value={sigla}>{nome}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.filter}>
          <h4 className={styles.filterTitle}>
            <span>{">"}</span> Cidade
          </h4>
          <div className={styles.selectContainer}>
            <select
              className={styles.mainSelect}
              onChange={(event) => handleBroadFilterChange(event, "cityName")}
              disabled={!stateName}
            >
              <option value="">Qualquer</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.filter}>
          <h4 className={styles.filterTitle}>
            <span>{">"}</span> Região
          </h4>
          <div className={styles.selectContainer}>
            <select
              className={styles.mainSelect}
              onChange={(event) => handleBroadFilterChange(event, "areaName")}
              disabled={!cityName}
            >
              <option value="">Qualquer</option>
              <option>Zona Sul</option>
              <option>Zona Oeste</option>
              <option>Zona Leste</option>
              <option>Zona Norte</option>
            </select>
          </div>
        </div>
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
