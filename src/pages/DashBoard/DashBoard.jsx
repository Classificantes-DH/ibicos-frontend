import React, { useContext } from "react";
import styles from "./DashBoard.module.scss";
import {
  EvaluationAccordionSwitcher,
  DashCardSwitcher,
} from "../../components";

import {
  useCustomerEvaluateHook,
  useProviderEvaluateHook,
  useProviderSelfStatisticsHook,
  useCustomerSelfStatisticsHook,
} from "../../hooks/index";

import { SessionContext } from "../../context/SessionContext/SessionContext";

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
  const { customerSelfStatistics } = useCustomerSelfStatisticsHook();

  const { userInfo } = useContext(SessionContext);
  const {
    person: { namePerson },
  } = userInfo;

  if (!pendingEvaluationsData) {
    return null;
  }

  const providerPath = "/prestadorDashBoard";
  const customerPath = "/clienteDashBoard";

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Seus indicadores na plataforma, </h2>
        <h2>{namePerson}</h2>
      </div>
      <div className={styles.cardsContainer}>
        <DashCardSwitcher
          cardData={customerSelfStatistics}
          path={customerPath}
        />
        <DashCardSwitcher
          cardData={providerSelfStatistics}
          path={providerPath}
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
