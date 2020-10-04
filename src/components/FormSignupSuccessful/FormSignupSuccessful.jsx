import React from "react";

import styles from "./FormSignupSuccessful.module.scss";

import successfulSignupImage from "../../resources/imgs/styleSvgs/signup_success.svg";

const FormSignupSuccessful = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.successIndicator}>
          <div className={styles.successBanner}>
            <p>Cadastro realizado</p>
          </div>

          <div className={styles.message}>
            <p>Você já pode navegar por nossa plataforma!</p>
          </div>
        </div>

        <div className={styles.sucessImage}>
          <img
            src={successfulSignupImage}
            alt="Cadastro efetuado com sucesso"
          />
        </div>
      </div>
    </>
  );
};

export default FormSignupSuccessful;
