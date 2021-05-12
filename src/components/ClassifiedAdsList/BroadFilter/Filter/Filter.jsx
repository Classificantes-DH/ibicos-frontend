import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";
import { Select } from "../../../index";
import "../Select.scss";
import Title from "./Title/Tile";

const Filter = ({ handleSelectChange, title, options, disabled }) => (
  <div className={styles.container}>
    <Title title={title} />
    <div className={styles.selectContainer}>
      <Select
        defaultOption={{ value: "", title: "Qualquer" }}
        name={title}
        onChangeHandler={handleSelectChange}
        optionsArray={options}
        className="broad-filter-main-select"
        disabled={disabled}
      />
    </div>
  </div>
);

export default Filter;

Filter.defaultProps = {
  disabled: false,
};

Filter.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
