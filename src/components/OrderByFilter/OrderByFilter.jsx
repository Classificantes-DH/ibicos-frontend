import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderByFilter.module.scss";

const OrderByFilter = ({ numberOfAds, handleOrderByChange }) => (
  <div className={styles.container}>
    <div className={styles.adsFoundContainer}>
      <p>
        Anúncios: <span>{numberOfAds}</span>
      </p>
    </div>
    <div className={styles.orderByContainer}>
      <p>Ordenar por:</p>
      <select onChange={(event) => handleOrderByChange(event)}>
        <option value="id">Qualquer</option>
        <option value="evaluation">Melhores Avaliados</option>
        <option value="evaluationsCounter">Mais Avaliados</option>
      </select>
    </div>
  </div>
);

OrderByFilter.propTypes = {
  numberOfAds: PropTypes.number.isRequired,
  handleOrderByChange: PropTypes.func.isRequired,
};

export default OrderByFilter;
