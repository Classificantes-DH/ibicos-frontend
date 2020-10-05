import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/scss/index.scss";

import Layout from "./Layout";
import { Home, ClassifiedAdsList, DashBoard } from "./pages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listaClassificados" component={ClassifiedAdsList} />
            <Route path="/clienteDashBoard" component={DashBoard} />
            <Route path="/prestadorDashBoard" component={DashBoard} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
