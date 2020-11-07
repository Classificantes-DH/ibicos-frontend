import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ header, content }) => (
  <div>
    <header>{header}</header>
    <div>{content}</div>
  </div>
);

Accordion.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;
