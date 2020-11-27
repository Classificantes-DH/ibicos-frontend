import React, { createContext } from "react";
import PropTypes from "prop-types";
import useAuthenticationHook from "../../hooks/useAuthenticationHook";

const Context = createContext();

const AuthenticationProvider = ({ children }) => {
  const {
    isUserAuthenticated,
    handleLogin,
    isCredentialInvalid,
    isLoading,
    handleLogout,
  } = useAuthenticationHook();

  if (isLoading) {
    return null;
  }

  return (
    <Context.Provider
      value={{
        isUserAuthenticated,
        handleLogin,
        isCredentialInvalid,
        isLoading,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

AuthenticationProvider.propTypes = { children: PropTypes.node.isRequired };

export { Context, AuthenticationProvider };
