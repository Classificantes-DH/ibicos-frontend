import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, useHistory } from "react-router-dom";

import { Context } from "../context/AuthContext/AuthContext";

const PrivateRoute = ({ component, exact = false, path }) => {
  const { isUserAuthenticated, isLoading } = useContext(Context);
  const history = useHistory();

  if (isLoading) {
    return null;
  }

  if (!isUserAuthenticated) {
    history.push("/login");
  }

  return <Route to={path} exact={exact} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
export default PrivateRoute;
