import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./DashBoard.module.scss";
import {
  DashCard,
  Accordion,
  EvaluationHeader,
  EvaluationContent,
} from "../../components";

const DashBoard = () => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <h2>Seus indicadores </h2>
      <h2>na plataforma, Beltrano Souza</h2>
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
    <div className={styles.accordionContainer}>
      <Accordion
        header={<EvaluationHeader />}
        content={<EvaluationContent />}
      />
    </div>
  </div>
);

export default DashBoard;
