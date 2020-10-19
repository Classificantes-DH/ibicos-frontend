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
  const {
    adsList,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
  } = useJobsAdsListDataHook("url", "page");
  if (!adsList || !adsList.results) return null;

  return (
    <div className={styles.container}>
      <IntroAdsList />
      <OrderByFilter
        numberOfAds={adsList.adsCounter}
        handleOrderByChange={handleOrderByChange}
      />
      <div className={styles.mainContentcontainer}>
        <BroadFilter
          handleBroadFilterChange={handleBroadFilterChange}
          filteringParameters={filteringParameters}
        />
        <div className={styles.cardsContainer}>
          {adsList.results.map((ad) => {
            return <JobCardModalHolder key={ad.id} adInfo={ad} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
