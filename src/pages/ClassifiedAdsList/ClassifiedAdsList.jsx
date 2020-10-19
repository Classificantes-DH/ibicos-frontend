import React from "react";
import {
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
  JobCardModalHolder,
} from "../../components";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  return (
    <div className={styles.container}>
      <IntroAdsList />
      <OrderByFilter />
      <div className={styles.mainContentcontainer}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          <JobCardModalHolder />
          <JobCardModalHolder />
          <JobCardModalHolder />
          <JobCardModalHolder />
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
