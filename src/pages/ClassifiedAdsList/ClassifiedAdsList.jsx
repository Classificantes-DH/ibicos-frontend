import React from "react";
import {
  JobCard,
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
} from "../../components";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  return (
    <>
      <IntroAdsList />
      <OrderByFilter />
      <div className={styles.container}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default ClassifiedAdsList;
