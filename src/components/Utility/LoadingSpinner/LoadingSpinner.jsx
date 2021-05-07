import React from "react";

import PropTypes from "prop-types";
import "./loading-spinner.scss";

const LoadingSpinner = ({ isLoading = false }) => {
  return (
    <div className="container">
      {isLoading ? (
        <div className="loading-spinner">
          <div className="r1 orange-r " />
          <div className="r2 orange-r" />
          <div className="r3 orange-r" />
          <div className="r4 purple-r" />
          <div className="r5 purple-r" />
          <div className="r6 purple-r" />
        </div>
      ) : null}
    </div>
  );
};

LoadingSpinner.propType = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
