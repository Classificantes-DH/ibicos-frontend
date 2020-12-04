import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  ClassifiedAdsList,
  ClientSignup,
  DashBoard,
  ProviderServices,
  ClientProfile,
  ProviderProfile,
  Login,
  PasswordRecoveryRequest,
  PasswordRecoveryChange,
  AdRegistration,
  AccountVerificationConfirmation,
  HowItWorks,
} from "../pages";

import { FormSignupSuccessful } from "../components";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrar" component={ClientSignup} />
      <Route path="/cadastroSucesso" component={FormSignupSuccessful} />
      <Route
        path="/confirmarConta"
        component={AccountVerificationConfirmation}
      />
      <Route
        path="/recuperarAcesso/requisicao"
        component={PasswordRecoveryRequest}
      />
      <Route
        path="/recuperarAcesso/trocarSenha"
        component={PasswordRecoveryChange}
      />{" "}
      <Route path="/comoFunciona" component={HowItWorks} />
      <PrivateRoute path="/listaClassificados" component={ClassifiedAdsList} />
      <PrivateRoute path="/listaServicos" component={ProviderServices} />
      <PrivateRoute path="/clienteDashBoard" component={DashBoard} />
      <PrivateRoute path="/prestadorDashBoard" component={DashBoard} />
      <PrivateRoute path="/clientePerfil" component={ClientProfile} />
      <PrivateRoute path="/prestadorPerfil" component={ProviderProfile} />
      <PrivateRoute path="/cadastrarAnuncio" component={AdRegistration} />
    </Switch>
  );
};

export default Routes;
