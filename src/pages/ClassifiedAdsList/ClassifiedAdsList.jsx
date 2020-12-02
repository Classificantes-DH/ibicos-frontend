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
    lastAdElementRef,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
    states,
    cities,
    handleSelectedStateUpdate,
  } = useJobsAdsListDataHook();

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
          states={states}
          cities={cities}
          handleSelectedStateUpdate={handleSelectedStateUpdate}
        />
        <div className={styles.cardsContainer}>
          {adsList.map((ad, index) => {
            if (adsList.length - 1 === index) {
              return (
                <div ref={lastAdElementRef}>
                  <JobCardModalHolder key={ad.id} adInfo={ad} />
                </div>
              );
            }
            return (
              <div>
                <JobCardModalHolder key={ad.id} adInfo={ad} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
