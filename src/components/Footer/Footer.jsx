import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
  phoneIcon,
  emailIcon,
  locationIcon,
  companyLogo,
} from "../../resources/imgs/utilityIcons/index";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <img
              src={locationIcon}
              alt="Ícone de representação da localidade da empresa"
              className={styles.contactLogo}
            />
            <div className={styles.contactData}>
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
            <div className={styles.contactData}>
              <p>+55 11 1234-5678</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img
              src={emailIcon}
              alt="Ícone de representação do email da empresa"
              className={styles.contactLogo}
            />
            <div className={styles.contactData}>
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
                mordenizaçao do contato entre clientes e prestadores de serviço
                autonomo, nossa missao e por meio da tecnologia facilitar
                negocios fazendo com que novas oportunidades prosperas surjam.
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
