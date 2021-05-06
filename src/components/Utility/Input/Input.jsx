import React from "react";
import PropTypes from "prop-types";

const Input = ({ children, htmlFor, title, className }) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={htmlFor}>
        <p>{title}</p>
        {children}
      </label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
