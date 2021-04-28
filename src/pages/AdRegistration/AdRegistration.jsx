import React from "react";

import styles from "./AdRegistration.module.scss";

import FormAdRegistration from "../../components/AdRegistration/FormAdRegistration/FormAdRegistration";

const AdRegistration = () => {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h2>Cadastre um novo anúncio</h2>
      </header>
      <div className={styles.formContainer}>
        <FormAdRegistration />
      </div>
    </div>
  );
};

export default AdRegistration;
