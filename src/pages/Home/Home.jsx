import React from "react";
import homeBrackground from "../../resources/imgs/backgrounds/workers-background.jpg";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <img src={homeBrackground} alt="Trabalhadores" />
      </div>
      <div className={styles.pageTitleContainer}>
        <h1>iBicos</h1>
      </div>
    </div>
  );
};

export default Home;
