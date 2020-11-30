import React from "react";
import styles from "./ProviderServices.module.scss";
import { JobCard } from "../../components/index";
import useProviderServices from "../../hooks/useProviderServices";

const ProviderServices = () => {
  const { providerAds, providerName } = useProviderServices();
  if (!providerAds || providerAds.length === 0) return null;
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>
          Seus serviços cadastrados,{" "}
          <span>
            <strong>{providerName}</strong>
          </span>
        </h2>
        {/* <h2>Clique no qual desejar editar</h2> */}
      </div>
      <div className={styles.cardsContainer}>
        {providerAds.map((ad) => {
          return <JobCard key={ad.id} adInfo={ad} />;
        })}
      </div>
    </div>
  );
};

export default ProviderServices;
