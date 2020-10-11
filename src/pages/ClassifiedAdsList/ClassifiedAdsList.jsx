import React from "react";
import {
  OrderByFilter,
  BroadFilter,
  IntroAdsList,
  ModalHolder,
} from "../../components";

import styles from "./ClassifiedAdsList.module.scss";

const ClassifiedAdsList = () => {
  return (
    <div className={styles.container}>
      <IntroAdsList />
      <OrderByFilter />
      <div className={styles.mainContentcontainer}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          <ModalHolder />
          <ModalHolder />
          <ModalHolder />
          <ModalHolder />
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAdsList;
