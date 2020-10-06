import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Layout";

import {
  Home,
  ClassifiedAdsList,
  ProviderSignup,
  ClientSignup,
  DashBoard,
  ProviderServices,
  ClientProfile,
  ProviderProfile,
} from "./pages";

import { FormSignupSuccessful } from "./components";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listaClassificados" component={ClassifiedAdsList} />
            <Route path="/listaServicos" component={ProviderServices} />
            <Route path="/clienteDashBoard" component={DashBoard} />
            <Route path="/prestadorDashBoard" component={DashBoard} />
            <Route path="/cadastroPrestador" component={ProviderSignup} />
            <Route path="/cadastroCliente" component={ClientSignup} />
            <Route path="/cadastroSucesso" component={FormSignupSuccessful} />
            <Route path="/clientePerfil" component={ClientProfile} />
            <Route path="/prestadorPerfil" component={ProviderProfile} />
          </Switch>
        </Layout>
      </>
    </Router>
  );
}

export default App;
