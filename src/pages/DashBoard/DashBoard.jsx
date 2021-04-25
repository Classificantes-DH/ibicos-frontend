import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import { DashCard, EvaluationAccordionSwitcher } from "../../components";

import useCustomerEvaluateHook from "../../hooks/useCustomerEvaluateHook";
import useProviderEvaluateHook from "../../hooks/useProviderEvaluateHook";
import useProviderSelfStatisticsHook from "../../hooks/useProviderSelfStatisticsHook";

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

  const { providerSelfStatistics } = useProviderSelfStatisticsHook();
  const {
    average_evaluation: averageEvaluation,
    total_ads_visualizations: totalAdsVisualization,
    total_evaluations: totalEvaluations,
    total_hired_services: totalHiredServices,
    total_messages_received: totalMessagesReceived,
  } = providerSelfStatistics;

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
            render={() => (
              <DashCard
                cardType="views"
                statisticValue={totalAdsVisualization}
                statisticTitle="Visualizações"
              />
            )}
          />
        </Switch>
        <DashCard
          cardType="contacts"
          statisticValue={totalMessagesReceived}
          statisticTitle="Mensagens recebidas"
        />
        <DashCard
          cardType="services"
          statisticValue={totalHiredServices}
          statisticTitle="Serviços efetivados"
        />
        <DashCard
          cardType="ratings"
          statisticValue={totalEvaluations}
          statisticTitle="Avaliações recebidas"
          optionalStatisticTitle="Avaliação média"
          optionalStatisticValue={averageEvaluation}
        />
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
