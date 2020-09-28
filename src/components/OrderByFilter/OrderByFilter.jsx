import React from "react";
import styles from "./OrderByFilter.module.scss";

const OrderByFilter = () => (
  <div className={styles.container}>
    <div className={styles.adsFoundContainer}>
      <p>
        Anúncios: <span>123</span>
      </p>
    </div>
    <div className={styles.orderByContainer}>
      <p>Ordenar por:</p>
      <select>
        <option>Qualquer</option>
        <option>Melhores Avaliados</option>
        <option>Mais Avaliados</option>
      </select>
    </div>
  </div>
);

export default OrderByFilter;
