import React from "react";

import styles from "./AdRegistration.module.scss";
import { LoadingSpinner } from "../../components/index";

import { useAdRegistrationHook, useLocationHook } from "../../hooks/index";

const AdRegistration = () => {
  const {
    adRegistrationObject,
    stateAbb,
    isLoading,
    isAdSuccessfullyRegistered,
    handleBasePropertiesChange,
    handleStateAbbChange,
    handleCityIncrement,
    handleServiceCategoryChange,
    handleRegionAreaIncrement,
    handleCitiesChange,
    handleRegionAreaDecrement,
    handleRegionAreaChange,
    handleFormSubmition,
  } = useAdRegistrationHook();

  const {
    states: statesOptionsFiller,
    cities: citiesOptionsFiller,
    handleSelectedStateUpdate,
  } = useLocationHook();

  const { adDescription, serviceCategory, cities } = adRegistrationObject;

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h2>Cadastre um novo anúncio</h2>
      </header>
      <div className={styles.formContainer}>
        <form method="POST" onSubmit={handleFormSubmition}>
          <div className={styles.inputContainer}>
            <label htmlFor="adDescription">
              <p>Descrição do anúncio</p>
              <textarea
                name="adDescription"
                className={styles.defaultTextArea}
                value={adDescription}
                onChange={handleBasePropertiesChange}
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="serviceCategory">
              <p>Categoria de serviço</p>
              <select
                name="serviceCategory"
                className={styles.defaultSelect}
                value={serviceCategory.id}
                onChange={handleServiceCategoryChange}
              >
                <option value="">Selecione uma categoria</option>
                <option value="1">Marceneiro</option>
                <option value="2">Eletricista</option>
                <option value="3">Encanador</option>
                <option value="4">Doméstica</option>
                <option value="5">Pintor</option>
                <option value="6">Costureira</option>
                <option value="7">Beleza</option>
                <option value="8">Pedreiro</option>
                <option value="9">Serralheiro</option>
              </select>
            </label>
          </div>

          <div className={styles.workLocationContainer}>
            <header className={styles.locationHeader}>
              <h4>Locais de atuação</h4>
            </header>

            <div className={styles.inputContainer}>
              <label htmlFor="stateAbb">
                <p>Selecione o Estado de atuação</p>
                <select
                  name="stateAbb"
                  className={styles.defaultSelect}
                  value={stateAbb}
                  onChange={(event) => {
                    handleStateAbbChange(event);
                    handleSelectedStateUpdate(event);
                  }}
                >
                  <option value="">Selecione um estado</option>
                  {/* <option value="SP">SP</option>
                  <option value="RJ">RJ</option> */}
                  {statesOptionsFiller.map(({ nome, sigla }) => (
                    <option value={sigla}>{nome}</option>
                  ))}
                </select>
              </label>
            </div>

            {cities.map((city, index) => (
              <div className={styles.locationContainer}>
                <div className={styles.inputContainer}>
                  <label htmlFor="cityName">
                    <p>Digite o nome da cidade de atuação</p>
                    <select
                      name="cityName"
                      value={city.cityName}
                      className={styles.defaultSelect}
                      disabled={citiesOptionsFiller.length === 0}
                      onChange={(event) => handleCitiesChange(event, index)}
                    >
                      <option value="">Qualquer</option>
                      {citiesOptionsFiller.map((cityOption) => (
                        <option value={cityOption}>{cityOption}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className={styles.regionAreaContainer}>
                  {city.regionArea.map(({ areaName }, regionIndex) => (
                    <div className={styles.regionArea}>
                      <div className={styles.inputContainer}>
                        <label htmlFor="areaName">
                          <p>Selecione uma região</p>

                          <select
                            name="areaName"
                            className={styles.defaultSelect}
                            value={areaName}
                            onChange={(event) =>
                              handleRegionAreaChange(event, index, regionIndex)
                            }
                            disabled={citiesOptionsFiller.length === 0}
                          >
                            <option value="">Escolha uma região</option>
                            <option value="Zona Sul">Zona Sul</option>
                            <option value="Zona Leste">Zona Leste</option>
                            <option value="Zona Oeste">Zona Oeste</option>
                            <option value="Zona Norte">Zona Norte</option>
                          </select>
                        </label>
                      </div>
                      <div className={styles.regionActionContainer}>
                        <button
                          type="button"
                          className={`${styles.defaultButton} ${styles.removeButton}`}
                          onClick={(event) =>
                            handleRegionAreaDecrement(event, index, regionIndex)
                          }
                        >
                          Remover região
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.btnContainer}>
                  <button
                    type="button"
                    className={`${styles.defaultButton} ${styles.addButton}`}
                    onClick={(event) => handleRegionAreaIncrement(event, index)}
                  >
                    Adicionar região
                  </button>
                </div>
              </div>
            ))}

            <div className={styles.btnContainer}>
              <button
                type="button"
                className={`${styles.defaultButton} ${styles.addButton}`}
                onClick={handleCityIncrement}
              >
                Adicionar cidade de atuação
              </button>
            </div>
          </div>

          <div className={`${styles.btnContainer} ${styles.centralizedBtn}`}>
            <input
              type="submit"
              value="Cadastrar"
              className={`${styles.defaultButton} ${styles.formSendButton}`}
            />
          </div>
          {isAdSuccessfullyRegistered ? (
            <div className={styles.sucessRegistration}>
              <h4>Anúncio registrado com sucesso</h4>
            </div>
          ) : null}
          <div className={styles.loadingSpinnerContainer}>
            <LoadingSpinner isLoading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdRegistration;
