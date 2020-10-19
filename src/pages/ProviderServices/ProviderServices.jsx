import React from "react";
import styles from "./ProviderServices.module.scss";
import { JobCard } from "../../components/index";
import useJobsAdsListDataHook from "../../hooks/useJobsAdsListDataHook";

const ProviderServices = () => {
  const { adsList } = useJobsAdsListDataHook("url", "page");
  if (!adsList || !adsList.results) return null;
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Seus serviços cadastrados, Beltrano Sousa</h2>
        <h2>Clique no qual desejar editar</h2>
      </div>
      <div className={styles.cardsContainer}>
        {adsList.results.map((ad) => {
          return <JobCard key={ad.id} adInfo={ad} />;
        })}
      </div>
    </div>
  );
};

export default ProviderServices;
