import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClickHandler,
  containerClassName,
  buttonClassName,
  text,
  type,
}) => (
  <div className={containerClassName}>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} className={buttonClassName} onClick={onClickHandler}>
      {text}
    </button>
  </div>
);

export default Button;

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  containerClassName: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button"]).isRequired,
};
