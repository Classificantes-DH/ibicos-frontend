import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import { Home, ClassifiedAdsList, ProviderSignup, ClientSignup } from "./pages";

import { FormSignupSuccessful } from "./components";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listaClassificados" component={ClassifiedAdsList} />
            <Route path="/cadastroPrestador" component={ProviderSignup} />
            <Route path="/cadastroCliente" component={ClientSignup} />
            <Route path="/cadastroSucesso" component={FormSignupSuccessful} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
