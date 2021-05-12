import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ handleSelectChange, title, options }) => (
  <div className={styles.filter}>
    <h4 className={styles.filterTitle}>
      <span>{">"}</span> {title}
    </h4>
    <div className={styles.selectContainer}>
      <select className={styles.mainSelect} onChange={handleSelectChange}>
        {options.map(({ title: fieldTitle, value }) => (
          <option value={value}>{fieldTitle}</option>
        ))}
      </select>
    </div>
  </div>
);

export default Filter;

Filter.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
