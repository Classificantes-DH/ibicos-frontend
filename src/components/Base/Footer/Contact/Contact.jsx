import React from "react";

import styles from "./Contact.module.scss";

import ContactInfo from "./ContactInfo/ContactInfo";

import {
  phoneIcon,
  emailIcon,
  locationIcon,
} from "../../../../resources/imgs/utilityIcons/index";

const Contact = () => (
  <div className={styles.contactContainer}>
    <ContactInfo
      imgData={{
        iconSrc: locationIcon,
        alt: "Ícone de representação da localidade da empresa",
      }}
      info={
        <>
          <p>Rua Aleatória, 0.</p>
          <p>
            <strong>São Paulo - Brasil</strong>
          </p>
        </>
      }
    />
    <ContactInfo
      imgData={{
        iconSrc: phoneIcon,
        alt: "Ícone de representação do telefone da empresa",
      }}
      info="+55 11 1234-5678"
    />
    <ContactInfo
      imgData={{
        iconSrc: emailIcon,
        alt: "Ícone de representação do email da empresa",
      }}
      info="classificantes.contato@email.com"
    />
  </div>
);

export default Contact;
