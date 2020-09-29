import React from "react";
import styles from "./BroadFilter.module.scss";

const BroadFilter = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h3>Filtro</h3>
    </div>
    <div className={styles.filtersContainer}>
      <div className={styles.filter}>
        <h4 className={styles.filterTitle}>
          <span>{">"}</span> Categoria
        </h4>
        <select className={styles.mainSelect}>
          <option>Qualquer</option>
          <option>Mecanico</option>
          <option>Eletricista</option>
          <option>Encanador</option>
        </select>
      </div>
      <div className={styles.filter}>
        <h4 className={styles.filterTitle}>
          <span>{">"}</span> Estado
        </h4>
        <select className={styles.mainSelect}>
          <option>Qualquer</option>
          <option>São Paulo</option>
          <option>Rio de Janeiro</option>
          <option>Minas Gerais</option>
          <option>Rio Grande do Sul</option>
          <option>Mato Grosso do Sul</option>
        </select>
      </div>
      <div className={styles.filter}>
        <h4 className={styles.filterTitle}>
          <span>{">"}</span> Cidade
        </h4>
        <select className={styles.mainSelect}>
          <option>Qualquer</option>
          <option>Mecanico</option>
          <option>Eletricista</option>
          <option>Encanador</option>
        </select>
      </div>
      <div className={styles.filter}>
        <h4 className={styles.filterTitle}>
          <span>{">"}</span> Região
        </h4>
        <select className={styles.mainSelect}>
          <option>Qualquer</option>
          <option>Zona Sul</option>
          <option>Zona Oeste</option>
        </select>
      </div>
    </div>
  </div>
);

export default BroadFilter;
