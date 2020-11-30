import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./Layout";

import Routes from "./routes/Routes";

import { AuthenticationProvider } from "./context/AuthContext/AuthContext";
import { SessionContextProvider } from "./context/SessionContext/SessionContext";

function App() {
  return (
    <Router>
      <AuthenticationProvider>
        <SessionContextProvider>
          <Layout>
            <Routes />
          </Layout>
        </SessionContextProvider>
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
