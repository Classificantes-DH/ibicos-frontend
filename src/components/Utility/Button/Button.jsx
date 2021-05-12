import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClickHandler,
  containerClassName,
  buttonClassName,
  text,
  type,
  children,
}) => (
  <div className={containerClassName}>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} className={buttonClassName} onClick={onClickHandler}>
      {text}
      {children}
    </button>
  </div>
);

export default Button;

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  children: PropTypes.node,
  containerClassName: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button"]).isRequired,
};
