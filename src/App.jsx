import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./Layout";

import Routes from "./routes/Routes";

import { AuthenticationProvider } from "./context/AuthContext/AuthContext";

function App() {
  return (
    <Router>
      <AuthenticationProvider>
        <Layout>
          <Routes />
        </Layout>
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
