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
    totalAds,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
  } = useJobsAdsListDataHook("url", "page");

  if (!adsList) return null;

  return (
    <div className={styles.container}>
      <IntroAdsList />
      <OrderByFilter
        numberOfAds={totalAds}
        handleOrderByChange={handleOrderByChange}
      />
      <div className={styles.mainContentcontainer}>
        <BroadFilter
          handleBroadFilterChange={handleBroadFilterChange}
          filteringParameters={filteringParameters}
        />
        <div className={styles.cardsContainer}>
          {adsList.map((ad) => {
            return <JobCardModalHolder key={ad.id} adInfo={ad} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
