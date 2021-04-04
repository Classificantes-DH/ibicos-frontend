import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import { DashCard, EvaluationAccordion } from "../../components";

import useCustomerEvaluateHook from "../../hooks/useCustomerEvaluateHook";

const DashBoard = () => {
  const {
    pendingEvaluationsData,
    handleJobConfirmation,
    handleJobDeletion,
  } = useCustomerEvaluateHook();

  if (!pendingEvaluationsData) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Seus indicadores na plataforma, </h2>
        <h2> Beltrano Souza</h2>
      </div>
      <div className={styles.cardsContainer}>
        <Switch>
          <Route
            path="/prestadorDashBoard"
            render={() => <DashCard cardType="views" />}
          />
        </Switch>
        <DashCard cardType="contacts" />
        <DashCard cardType="services" />
        <DashCard cardType="ratings" />
      </div>
      <div className={styles.headerContainer}>
        <h2>Avalie suas últimas experiências na plataforma</h2>
      </div>
      <div className={styles.accordionContainer}>
        {/* <EvaluationAccordion />
        <EvaluationAccordion />
        <EvaluationAccordion />
        <EvaluationAccordion />
        <EvaluationAccordion /> */}
        <Switch>
          <Route
            path="/clienteDashBoard"
            render={() =>
              pendingEvaluationsData.map((pendingEvaluationData) => {
                if (pendingEvaluationData.providerEvaluated) {
                  return null;
                }
                return (
                  <EvaluationAccordion
                    pendingEvaluationData={pendingEvaluationData}
                    handleJobConfirmation={handleJobConfirmation}
                    handleJobDeletion={handleJobDeletion}
                  />
                );
              })
            }
          />
        </Switch>
        {/* {pendingEvaluationsData.map((ped) => (
          <EvaluationAccordion />
        ))} */}
      </div>
    </div>
  );
};

export default DashBoard;
