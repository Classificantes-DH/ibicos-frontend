import React from "react";
import {
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
  JobCardModalHolder,
} from "../../components";
import useJobsAdsListDataHook from "../../hooks/useJobsAdsListDataHook";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  const { adsList } = useJobsAdsListDataHook("url", "page");
  if (!adsList) return null;

  return (
    <div className={styles.container}>
      <IntroAdsList />
      <OrderByFilter />
      <div className={styles.mainContentcontainer}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          {/* <JobCardModalHolder />
          <JobCardModalHolder />
          <JobCardModalHolder />
          <JobCardModalHolder /> */}
          {adsList.results &&
            adsList.results.map((ad) => {
              return <JobCardModalHolder key={ad.id} adInfo={ad} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
