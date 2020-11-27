import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import Layout from "./Layout";

import Routes from "./routes/Routes";

import { AuthenticationProvider } from "./context/AuthContext/AuthContext";

function App() {
  const history = useHistory();
  return (
    <AuthenticationProvider>
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
