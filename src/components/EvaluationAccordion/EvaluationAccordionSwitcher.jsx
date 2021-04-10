import React from "react";

import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { EvaluationAccordion } from "../index";

const EvaluationAccordionSwitcher = ({
  path,
  pendingEvaluationsData,
  handleJobConfirmation,
  handleJobDeletion,
  handleRatingChange,
}) => {
  return (
    <Switch>
      <Route
        path={path}
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
                handleRatingChange={handleRatingChange}
              />
            );
          })
        }
      />
    </Switch>
  );
};

EvaluationAccordionSwitcher.propTypes = {
  path: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  pendingEvaluationsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleJobDeletion: PropTypes.func,
  handleJobConfirmation: PropTypes.func,
};

EvaluationAccordionSwitcher.defaultProps = {
  handleJobDeletion: null,
  handleJobConfirmation: null,
};

export default EvaluationAccordionSwitcher;
