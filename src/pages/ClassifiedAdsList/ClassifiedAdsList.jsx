import React from "react";
import {
  LoadingSpinner,
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
  JobCardModalHolder,
} from "../../components/index";

import { useJobsAdsListDataHook } from "../../hooks/index";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  const {
    adsList,
    totalAds,
    isLoading,
    lastAdElementRef,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
    states,
    cities,
    handleSelectedStateUpdate,
  } = useJobsAdsListDataHook();

  if (!adsList) return null;

  const handleAdsRendering = (ads) => {
    return ads.map((ad, index) => {
      if (ads.length - 1 === index) {
        return (
          <div ref={lastAdElementRef}>
            <JobCardModalHolder key={ad.id} adData={ad} />
          </div>
        );
      }

      return (
        <div>
          <JobCardModalHolder key={ad.id} adData={ad} />
        </div>
      );
    });
  };

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
        <div className={styles.wrapperContainer}>
          <div className={styles.cardsContainer}>
            {handleAdsRendering(adsList)}
          </div>
          <div className={styles.loadingSpinnerContainer}>
            <LoadingSpinner isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
