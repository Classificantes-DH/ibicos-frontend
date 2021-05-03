import React from "react";
import styles from "./Footer.module.scss";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import AboutUs from "./AboutUs/AboutUs";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "../../resources/imgs/utilityIcons/index";

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

          <div className={styles.socialMediaContainer}>
            <h4 className={styles.sectionTitle}>{">"} Siga-nos</h4>
            <div className={styles.iconsContainer}>
              <div className={styles.iconContainer}>
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="Logo do Facebook" />
                </a>
              </div>
              <div className={styles.iconContainer}>
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Logo do Twitter" />
                </a>
              </div>
              <div className={styles.iconContainer}>
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Logo do Instagram" />
                </a>
              </div>
              <div className={styles.iconContainer}>
                <a
                  href="http://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="Logo do Linkedin" />
                </a>
              </div>
            </div>
          </div>
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
