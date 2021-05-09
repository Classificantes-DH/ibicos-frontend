import React from "react";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styles from "./Survey.module.scss";

import Message from "./Message/Message";

const Survey = ({ isHired, message, children }) => {
  const location = useLocation();
  /* #TODO: Remove location path validation and use data coming from the backend */
  return (
    <div
      className={`${styles.content} ${
        isHired || location.pathname.includes("/prestadorDashBoard")
          ? `${styles.activeContent}`
          : ``
      }`}
    >
      <Message message={message} />

      {children}
    </div>
  );
};

export default Survey;

Survey.propTypes = {
  isHired: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
