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
  Login,
} from "./pages";

import { FormSignupSuccessful } from "./components";

import { AuthenticationProvider } from "./context/AuthContext/AuthContext";

function App() {
  return (
    <AuthenticationProvider>
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
              <Route path="/cadastrar" component={ClientSignup} />
              <Route path="/cadastroSucesso" component={FormSignupSuccessful} />
              <Route path="/clientePerfil" component={ClientProfile} />
              <Route path="/prestadorPerfil" component={ProviderProfile} />
              <Route path="/login" component={Login} />
            </Switch>
          </Layout>
        </>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
