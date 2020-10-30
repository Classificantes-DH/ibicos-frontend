import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import phoneIcon from "../../resources/imgs/utilityIcons/phone.svg";
import emailIcon from "../../resources/imgs/utilityIcons/email.svg";
import locationIcon from "../../resources/imgs/utilityIcons/map-location.svg";
import companyLogo from "../../resources/imgs/utilityIcons/company-logo.svg";

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
          <h4>{"> "}Navegação</h4>
          <nav>
            <ul className={styles.navigationUrls}>
              <li>
                <Link to="http://localhost:3000/ibicos-frontend/">Home </Link>
              </li>
              <li>
                <Link to="/">Como Funciona</Link>
              </li>
              <li>
                <Link to="/">Inscreva-se</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.verticalDivisor} />
        <div className={styles.aboutUsContainer}>
          <h4>{">"} Sobre nós</h4>
          <div className={styles.mainInfo}>
            <div className={styles.logo}>
              <img src={companyLogo} alt="Logo da empresa" />
              <p>iBicos</p>
            </div>
            <p>
              A iBicos surgiu a partir da necessidade da mordenizaçao do contato
              entre clientes e prestadores de serviço autonomo, nossa missao e
              por meio da tecnologia facilitar negocios fazendo com que novas
              oportunidades prosperas surjam.
            </p>
          </div>
          <div className={styles.socialMedia}>
            <h4>{">"} Siga-nos</h4>
            <span>F</span>
            <span>I</span>
            <span>T</span>
            <span>L</span>
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
