import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import { DashCard, EvaluationAccordionSwitcher } from "../../components";

import useCustomerEvaluateHook from "../../hooks/useCustomerEvaluateHook";
import useProviderEvaluateHook from "../../hooks/useProviderEvaluateHook";
import useProviderSelfStatisticsHook from "../../hooks/useProviderSelfStatisticsHook";
import useCustomerSelfStatisticsHook from "../../hooks/useCustomerSelfStatisticsHook";

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

  const { customerSelfStatistics } = useCustomerSelfStatisticsHook();

  const {
    average_evaluation: averageCustomerEvaluation,
    total_evaluations: totalCustomerEvaluations,
    total_hired_services: totalCustomerHiredServices,
    total_messages_sent: totalCustomerMessagesSent,
  } = customerSelfStatistics;

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
          <Route path="/prestadorDashBoard">
            <DashCard
              cardType="views"
              statisticValue={totalAdsVisualization}
              statisticTitle="Visualizações"
            />
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
          </Route>
        </Switch>
        <Switch>
          <Route path="/clienteDashBoard">
            <DashCard
              cardType="contacts"
              statisticValue={totalCustomerMessagesSent}
              statisticTitle="Mensagens recebidas"
            />
            <DashCard
              cardType="services"
              statisticValue={totalCustomerHiredServices}
              statisticTitle="Serviços efetivados"
            />
            <DashCard
              cardType="ratings"
              statisticValue={totalCustomerEvaluations}
              statisticTitle="Avaliações recebidas"
              optionalStatisticTitle="Avaliação média"
              optionalStatisticValue={averageCustomerEvaluation}
            />
          </Route>
        </Switch>
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
