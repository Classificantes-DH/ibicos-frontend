import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { DashCard } from "../../index";

const DashCardSwitcher = ({ cardData, path }) => {
  const {
    average_evaluation: averageEvaluation,
    total_evaluations: totalEvaluations,
    total_hired_services: totalHiredServices,
    total_messages: totalMessages,
    total_ads_visualizations: totalAdsVisualization,
  } = cardData;
  return (
    <Switch>
      <Route path={path}>
        {totalAdsVisualization ? (
          <DashCard
            cardType="views"
            statisticValue={totalAdsVisualization}
            statisticTitle="Visualizações"
          />
        ) : null}
        <DashCard
          cardType="contacts"
          statisticValue={totalMessages}
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
  );
};

export default DashCardSwitcher;

DashCardSwitcher.propTypes = {
  cardData: PropTypes.shape({
    average_evaluation: PropTypes.number.isRequired,
    total_evaluations: PropTypes.number.isRequired,
    total_hired_services: PropTypes.number.isRequired,
    total_messages: PropTypes.number.isRequired,
    total_ads_visualizations: PropTypes.number,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
