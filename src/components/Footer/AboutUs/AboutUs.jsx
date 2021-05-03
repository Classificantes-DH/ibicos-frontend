import React from "react";
import styles from "./AboutUs.module.scss";

import { companyLogo } from "../../../resources/imgs/utilityIcons/index";

const AboutUs = () => (
  <div className={styles.aboutUsContainer}>
    <h4>{">"} Sobre nós</h4>
    <div className={styles.mainInfo}>
      <div className={styles.companyLogoContainer}>
        <img src={companyLogo} alt="Logo da empresa" />
        <p>iBicos</p>
      </div>
      <p>
        A <strong>iBicos</strong> surgiu a partir da necessidade da mordenização
        do contato entre clientes e prestadores de serviço autonômo, nossa
        missão é por meio da tecnologia facilitar negócios fazendo com que novas
        oportunidades prósperas surjam.
      </p>
    </div>
  </div>
);

export default AboutUs;
