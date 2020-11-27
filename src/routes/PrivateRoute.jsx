import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { Context } from "../context/AuthContext/AuthContext";

const PrivateRoute = ({ component, exact, path }) => {
  const { isUserAuthenticated, isLoading } = useContext(Context);

  if (isLoading) {
    return null;
  }

  if (!isUserAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route to={path} exact={exact} Component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
export default PrivateRoute;
