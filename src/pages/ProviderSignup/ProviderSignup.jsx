import React from "react";

import { FormProvider } from "../../components";

import { useProviderSignupHook } from "../../hooks/index";

import styles from "./ProviderSignup.module.scss";

const ProviderSignup = () => {
  const {
    currentStep,
    fields,
    regions,
    services,
    progressImg,
    addRegion,
    addService,
    handleFieldChange,
    handleSubmit,
    handleNextStep,
    handlePreviousStep,
  } = useProviderSignupHook();

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p>Cadastre-se para receber oportunidades!</p>
      </div>

      <div className={styles.containerProgressImg}>
        <img src={progressImg} alt={`Etapa ${currentStep}`} />
      </div>

      <div className={styles.containerForm}>
        <form>
          <FormProvider
            currentStep={currentStep}
            fields={fields}
            regions={regions}
            services={services}
            progressImg={progressImg}
            handleNextStep={handleNextStep}
            handleFieldChange={handleFieldChange}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
            addRegion={addRegion}
            addService={addService}
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
    </div>
  );
};

export default ProviderSignup;
