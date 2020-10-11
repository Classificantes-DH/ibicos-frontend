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
    <>
      <IntroAdsList />
      <OrderByFilter />
      <div className={styles.container}>
        <BroadFilter />
        <div className={styles.cardsContainer}>
          <ModalHolder />
          <ModalHolder />
          <ModalHolder />
          <ModalHolder />
        </div>
      </div>
    </>
  );
};

export default ClassifiedAdsList;
