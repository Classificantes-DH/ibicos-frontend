import React from "react";
import PropTypes from "prop-types";
import styles from "./BroadFilter.module.scss";

const BroadFilter = ({ handleBroadFilterChange, filteringParameters }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Filtro</h3>
      </div>
      <div className={styles.filtersContainer}>
        <div className={styles.filter}>
          <h4 className={styles.filterTitle}>
            <span>{">"}</span> Categoria
          </h4>
          <div className={styles.selectContainer}>
            <select
              className={styles.mainSelect}
              onChange={(event) => handleBroadFilterChange(event, "category")}
            >
              <option value="">Qualquer</option>
              <option>Mecânico</option>
              <option>Eletricista</option>
              <option>Encanador</option>
            </select>
          </div>
        </div>
        <div className={styles.filter}>
          <h4 className={styles.filterTitle}>
            <span>{">"}</span> Estado
          </h4>
          <div className={styles.selectContainer}>
            <select
              className={styles.mainSelect}
              onChange={(event) => handleBroadFilterChange(event, "state")}
            >
              <option value="">Qualquer</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="MS">Mato Grosso do Sul</option>
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
              onChange={(event) => handleBroadFilterChange(event, "cities")}
              disabled={!filteringParameters.state}
            >
              <option value="">Qualquer</option>
              <option>São Paulo</option>
              <option>Belo Horizonte</option>
              <option>Rio de Janeiro</option>
              <option>Cidade 1</option>
              <option>Cidade 2</option>
              <option>Cidade 3</option>
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
              onChange={(event) => handleBroadFilterChange(event, "regions")}
              disabled={!filteringParameters.cities}
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
  filteringParameters: PropTypes.shape({
    category: PropTypes.string,
    state: PropTypes.string.isRequired,
    cities: PropTypes.string.isRequired,
    regions: PropTypes.string.isRequired,
  }).isRequired,
};

export default BroadFilter;
