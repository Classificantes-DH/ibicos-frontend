import React from "react";

import { FormClient } from "../../components";

import { useClientSignupHook } from "../../hooks/index";

import styles from "./ClientSignup.module.scss";

const ClientSignup = () => {
  const {
    currentStep,
    fields,
    progressImg,
    handleFieldChange,
    handleSubmit,
    handleNextStep,
    handlePreviousStep,
    validationMessages,
    handleFieldValidation,
  } = useClientSignupHook();

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p>Cadastre-se para ter acesso completo a plataforma!</p>
      </div>

      <div className={styles.containerProgressImg}>
        <img src={progressImg} alt={`Etapa ${currentStep}`} />
      </div>

      <div className={styles.containerForm}>
        <form>
          <FormClient
            currentStep={currentStep}
            fields={fields}
            progressImg={progressImg}
            handleNextStep={handleNextStep}
            handleFieldChange={handleFieldChange}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
            validationMessages={validationMessages}
            handleFieldValidation={handleFieldValidation}
          />

          <footer>
            {currentStep > 1 && currentStep <= 3 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className={styles.containerBackButton}
              >
                Voltar
              </button>
            )}

            {currentStep === 3 && (
              <button
                type="button"
                onClick={handleSubmit}
                className={styles.containerSubmitButton}
              >
                Salvar
              </button>
            )}

            {currentStep >= 1 && currentStep < 3 && (
              <button
                type="button"
                onClick={handleNextStep}
                className={styles.containerSubmitButton}
              >
                Continuar
              </button>
            )}
          </footer>
        </form>
      </div>
      <p> Campos marcados com * são obrigatório</p>
    </div>
  );
};

export default ClientSignup;
