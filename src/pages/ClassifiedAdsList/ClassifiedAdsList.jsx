import React from "react";
<<<<<<< HEAD
import { JobCard, OrderByFilter, BroadFilter } from "../../components";

import styles from "./ClassifiedAdsList.module.scss";
=======
import { JobCard, OrderByFilter } from "../../components";
>>>>>>> 291433b146fb23b2f7c47e17006702d27a6ed219

const ClassifiedAdsList = () => {
  return (
    <>
      <OrderByFilter />
<<<<<<< HEAD
      <div className={styles.container}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
=======
      <JobCard />
>>>>>>> 291433b146fb23b2f7c47e17006702d27a6ed219
    </>
  );
};

export default ClassifiedAdsList;
