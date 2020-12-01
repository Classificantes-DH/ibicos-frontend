import React, { useRef, useCallback, useState } from "react";

import {
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
  JobCardModalHolder,
} from "../../components";

import useJobsAdsListDataHook from "../../hooks/useJobsAdsListDataHook";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const {
    adsList,
    totalAds,
    hasMore,
    filteringParameters,
    handleOrderByChange,
    handleBroadFilterChange,
  } = useJobsAdsListDataHook(pageNumber);

  const observer = useRef();
  const lastAdElementRef = useCallback(
    (node) => {
      if (!adsList) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

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
          {adsList.map((ad, index) => {
            if (adsList.length - 1 === index) {
              return (
                <div ref={lastAdElementRef}>
                  <JobCardModalHolder
                    key={ad.id}
                    adInfo={ad}
                    ref={lastAdElementRef}
                  />
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
