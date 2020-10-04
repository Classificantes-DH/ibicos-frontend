import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import { Home, ClassifiedAdsList, ProviderSignup } from "./pages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listaClassificados" component={ClassifiedAdsList} />
            <Route path="/cadastroPrestador" component={ProviderSignup} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
