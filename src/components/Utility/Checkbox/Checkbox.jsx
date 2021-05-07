import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, name, onChangeHandler, value }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Checkbox;
