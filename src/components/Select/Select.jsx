import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";

const Select = ({ label, name, values, handleSelection, stateValue }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.selectLabel}>
        {label}
      </label>
      <select
        name={name}
        onChange={handleSelection}
        value={stateValue}
        className={styles.selector}
      >
        <option value="">Selecione o Estado</option>
        {values.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string.isRequired })
  ).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stateValue: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default Select;
