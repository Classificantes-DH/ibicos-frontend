import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Contact from "./Contact/Contact";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
  companyLogo,
} from "../../resources/imgs/utilityIcons/index";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <Contact />
        <div className={styles.verticalDivisor} />
        <div className={styles.navigationContainer}>
          <h4 className={styles.sectionTitle}>{"> "}Navegação</h4>
          <nav>
            <ul className={styles.navigationUrls}>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/comoFunciona">Como Funciona</Link>
              </li>
              <li>
                <Link to="/cadastrar">Inscreva-se</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.verticalDivisor} />

        <div className={styles.companyInfoContainer}>
          <div className={styles.aboutUsContainer}>
            <h4 className={styles.sectionTitle}>{">"} Sobre nós</h4>
            <div className={styles.mainInfo}>
              <div className={styles.companyLogoContainer}>
                <img src={companyLogo} alt="Logo da empresa" />
                <p>iBicos</p>
              </div>
              <p>
                A <strong>iBicos</strong> surgiu a partir da necessidade da
                mordenização do contato entre clientes e prestadores de serviço
                autonômo, nossa missão é por meio da tecnologia facilitar
                negócios fazendo com que novas oportunidades prósperas surjam.
              </p>
            </div>
          </div>
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
