import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

import phoneIcon from "../../resources/imgs/utilityIcons/phone.svg";
import emailIcon from "../../resources/imgs/utilityIcons/email.svg";
import locationIcon from "../../resources/imgs/utilityIcons/map-location.svg";
import companyLogo from "../../resources/imgs/utilityIcons/company-logo.svg";

import facebookIcon from "../../resources/imgs/utilityIcons/socialMedia/facebook.svg";
import instagramIcon from "../../resources/imgs/utilityIcons/socialMedia/instagram.svg";
import linkedinIcon from "../../resources/imgs/utilityIcons/socialMedia/linkedin.svg";
import twitterIcon from "../../resources/imgs/utilityIcons/socialMedia/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.companyInfoContainer}>
          <div className={styles.contactInfo}>
            <img
              src={locationIcon}
              alt="Ícone de representação da localidade da empresa"
              className={styles.contactLogo}
            />
            <div className={styles.infoData}>
              <p>Rua Aleatoria, 0</p>
              <p>
                <strong>São Paulo - Brasil</strong>
              </p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img
              src={phoneIcon}
              alt="Ícone de representação do email da empresa"
              className={styles.contactLogo}
            />
            <div className={styles.infoData}>
              <p>+55 11 1234-5678</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img
              src={emailIcon}
              alt="Ícone de representação do email da empresa"
              className={styles.contactLogo}
            />
            <div className={styles.infoData}>
              <p className={styles.emailInfo}>
                classificantes.contato@email.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.verticalDivisor} />
        <div className={styles.navigationContainer}>
          <h4 className={styles.sectionTitle}>{"> "}Navegação</h4>
          <nav>
            <ul className={styles.navigationUrls}>
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/comoFunciona">Como Funciona</NavLink>
              </li>
              <li>
                <NavLink to="/cadastro">Inscreva-se</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.verticalDivisor} />
        <div className={styles.aboutUsContainer}>
          <h4 className={styles.sectionTitle}>{">"} Sobre nós</h4>
          <div className={styles.mainInfo}>
            <div className={styles.companyLogoContainer}>
              <img src={companyLogo} alt="Logo da empresa" />
              <p>iBicos</p>
            </div>
            <p>
              A <strong>iBicos</strong> surgiu a partir da necessidade da
              mordenizaçao do contato entre clientes e prestadores de serviço
              autonomo, nossa missao e por meio da tecnologia facilitar negocios
              fazendo com que novas oportunidades prosperas surjam.
            </p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h4 className={styles.sectionTitle}>{">"} Siga-nos</h4>
          <div className={styles.iconsContainer}>
            <div className={styles.iconContainer}>
              <a href="http://www.facebook.com">
                <img src={facebookIcon} alt="Logo do Facebook" />
              </a>
            </div>
            <div className={styles.iconContainer}>
              <a href="http://www.twitter.com">
                <img src={instagramIcon} alt="Logo do Twitter" />
              </a>
            </div>
            <div className={styles.iconContainer}>
              <a href="http://www.instagram.com">
                <img src={twitterIcon} alt="Logo do Instagram" />
              </a>
            </div>
            <div className={styles.iconContainer}>
              <a href="http://www.linkedin.com">
                <img src={linkedinIcon} alt="Logo do Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRightContainer}>
        <p>© Copyright 2020 iBicos</p>
      </div>
    </footer>
  );
};

export default Footer;
