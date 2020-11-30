import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getSessionCookie } from "../../session/SessionConfig";

const SessionContext = createContext(getSessionCookie().data);

const SessionContextProvider = ({ children }) => {
  const [userInfo] = useState(getSessionCookie().data);

  return (
    <SessionContext.Provider value={{ userInfo }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionContextProvider.propTypes = { children: PropTypes.node.isRequired };

export { SessionContext, SessionContextProvider };
