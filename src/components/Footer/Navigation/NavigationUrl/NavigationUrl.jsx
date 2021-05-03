import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationUrl = ({ to, text }) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
);

export default NavigationUrl;

NavigationUrl.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
