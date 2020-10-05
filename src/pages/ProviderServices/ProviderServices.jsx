import React from "react";
import styles from "./ProviderServices.module.scss";
import { JobCard } from "../../components/index";

const ProviderServices = () => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <h2>Seus serviços cadastrados, Beltrano Sousa</h2>
      <h2>Clique no qual desejar editar</h2>
    </div>
    <div className={styles.cardsContainer}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  </div>
);

export default ProviderServices;
