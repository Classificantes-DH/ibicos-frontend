import React from "react";

import styles from "./HowItWorks.module.scss";

import {
  localizarLocalizar,
  registrarNegocios,
  servicosRealize,
  sobrecarga,
} from "../../resources/imgs/utilityIcons/index";

const HowItWorks = () => (
  <div className={styles.container}>
    <header>
      <h1>Como Funciona?</h1>
    </header>
    <div className={styles.contentContainer}>
      <div className={styles.columnContent}>
        <header>
          <h3>Anunciantes</h3>
          <p>Mais negócios</p>
        </header>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={registrarNegocios} alt="Registrar negócios" />
          </div>
          <div className={styles.descriptionContainer}>
            <h4>Aumento de renda? Registre-se aqui!!!</h4>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h3>Realize!</h3>
          </div>
          <div className={styles.imageContainer}>
            <img src={servicosRealize} alt="Registrar negócios" />
          </div>
          <div className={styles.descriptionContainer}>
            <h4>Registre seus serviços e a sua região de atuação!</h4>
          </div>
        </div>
      </div>
      <div className={styles.columnContent}>
        <header>
          <h3>Clientes</h3>
          <p>Ajuda?</p>
        </header>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={sobrecarga} alt="Registrar negócios" />
          </div>
          <div className={styles.descriptionContainer}>
            <h4>Está sobrecarregado e não acha ajuda?</h4>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h3>Localize!</h3>
          </div>
          <div className={styles.imageContainer}>
            <img src={localizarLocalizar} alt="Registrar negócios" />
          </div>
          <div className={styles.descriptionContainer}>
            <h4>Localize aqui prestadores para auxiliar você!</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
