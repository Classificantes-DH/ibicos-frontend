import PropTypes from "prop-types";
import React from "react";

const Select = ({
  name,
  className,
  value,
  onChangeHandler,
  defaultOption,
  optionsArray,
  disabled,
}) => {
  return (
    <select
      name={name}
      className={className}
      value={value}
      onChange={onChangeHandler}
      disabled={disabled}
    >
      {defaultOption ? (
        <option value={defaultOption.value}>{defaultOption.title}</option>
      ) : null}
      {optionsArray.map(({ title, value: internalValue }) => (
        <option value={internalValue}>{title}</option>
      ))}
    </select>
  );
};

export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  defaultOption: PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
  }),
  optionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool.isRequired,
};

Select.defaultProps = {
  defaultOption: null,
};
