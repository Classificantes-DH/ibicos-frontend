import React from "react";

import styles from "./HowItWorks.module.scss";

import {
  localizarLocalizar,
  registrarNegocios,
  servicosRealize,
  sobrecarga,
} from "../../resources/imgs/utilityIcons/index";

import { FlagHeader, DemonstrationCard } from "../../components/index";

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

        <DemonstrationCard
          imgData={{
            imgSrc: registrarNegocios,
            altText: "Aumento de renda? Registre-se aqui!",
          }}
          text="Aumento de renda? Registre-se aqui!"
        />

        <FlagHeader text="Realize!" />
        <DemonstrationCard
          imgData={{
            imgSrc: servicosRealize,
            altText: "Registre seus serviços e a sua região de atuação!",
          }}
          text="Registre seus serviços e a sua região de atuação!"
        />
      </div>
      <div className={styles.columnContent}>
        <header>
          <h3>Clientes</h3>
          <p>Ajuda?</p>
        </header>
        <DemonstrationCard
          imgData={{
            imgSrc: sobrecarga,
            altText: "Está sobrecarregado e não acha ajuda?",
          }}
          text="Está sobrecarregado e não acha ajuda?"
        />

        <FlagHeader text="Localize!" />
        <DemonstrationCard
          imgData={{
            imgSrc: localizarLocalizar,
            altText: "Localize aqui prestadores para auxiliar você!",
          }}
          text="Localize aqui prestadores para auxiliar você!"
        />
      </div>
    </div>
  </div>
);

export default HowItWorks;
