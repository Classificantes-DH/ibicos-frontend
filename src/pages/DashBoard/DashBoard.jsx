import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import { DashCard, EvaluationAccordionSwitcher } from "../../components";

import useCustomerEvaluateHook from "../../hooks/useCustomerEvaluateHook";
import useProviderEvaluateHook from "../../hooks/useProviderEvaluateHook";

const DashBoard = () => {
  const {
    pendingEvaluationsData,
    handleJobConfirmation,
    handleJobDeletion,
    handleRatingChange,
  } = useCustomerEvaluateHook();

  const {
    pendingEvaluationsData: providerPendingEvaluationsData,
    handleRatingChange: handleProviderRatingChange,
  } = useProviderEvaluateHook();

  if (!pendingEvaluationsData) {
    return null;
  }

  const providerPath = "/prestadorDashBoard";
  const customerPath = "/clienteDashBoard";

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
        <EvaluationAccordionSwitcher
          path={customerPath}
          pendingEvaluationsData={pendingEvaluationsData}
          handleJobConfirmation={handleJobConfirmation}
          handleJobDeletion={handleJobDeletion}
          handleRatingChange={handleRatingChange}
        />
        <EvaluationAccordionSwitcher
          path={providerPath}
          pendingEvaluationsData={providerPendingEvaluationsData}
          handleRatingChange={handleProviderRatingChange}
        />
      </div>
    </div>
  );
};

export default DashBoard;
