import React from "react";
import { JobCard, OrderByFilter, BroadFilter } from "../../components";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  return (
    <>
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
