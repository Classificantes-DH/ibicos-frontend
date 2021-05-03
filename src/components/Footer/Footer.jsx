import React from "react";
import styles from "./Footer.module.scss";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <Contact />
        <div className={styles.verticalDivisor} />
        <Navigation />
        <div className={styles.verticalDivisor} />

        <div className={styles.companyInfoContainer}>
          <AboutUs />
          <SocialMedia />
        </div>
      </div>
      <div className={styles.copyRightContainer}>
        <p>
          © Copyright 2020 <strong>iBicos</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
