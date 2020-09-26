import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/scss/index.scss";

import Layout from "./Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
