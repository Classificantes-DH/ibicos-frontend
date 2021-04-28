import React from "react";
import styles from "../AdRegistration.module.scss";
import Input from "./Input";
import Select from "./Select";
import "./Input.scss";
import "./Select.scss";

import { LoadingSpinner } from "../../../components/index";

import {
  useAdRegistrationHook,
  useLocationHook,
  useServiceCategoryHook,
} from "../../../hooks/index";

const Form = () => {
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

  const { serviceCategories } = useServiceCategoryHook();

  const {
    states: statesOptionsFiller,
    cities: citiesOptionsFiller,
    handleSelectedStateUpdate,
  } = useLocationHook();

  const { adDescription, serviceCategory, cities } = adRegistrationObject;

  const regionsAreas = [
    { value: "Zona Sul", title: "Zona Sul" },
    { value: "Zona Norte", title: "Zona Norte" },
    { value: "Zona Oeste", title: "Zona Oeste" },
    { value: "Zona Leste", title: "Zona Leste" },
  ];

  return (
    <form method="POST" onSubmit={handleFormSubmition}>
      <Input
        htmlFor="adDescription"
        title="Descrição do anúncio"
        className="inputContainer"
      >
        <textarea
          name="adDescription"
          className="defaultTextArea"
          value={adDescription}
          onChange={handleBasePropertiesChange}
        />
      </Input>
      <Input
        htmlFor="serviceCategory"
        title="Categoria de serviço"
        className="inputContainer"
      >
        <Select
          name="serviceCategory"
          className="defaultSelect"
          value={serviceCategory.id}
          onChangeHandler={handleServiceCategoryChange}
          optionsArray={serviceCategories.map(({ id, categoryName }) => ({
            title: categoryName,
            value: id,
          }))}
        />
      </Input>

      <div className={styles.workLocationContainer}>
        <header className={styles.locationHeader}>
          <h4>Locais de atuação</h4>
        </header>
        <Input
          htmlFor="stateAbb"
          title="Selecione o Estado de atuação"
          className="inputContainer"
        >
          <Select
            name="stateAbb"
            className="defaultSelect"
            value={stateAbb}
            defaultOption={{
              title: "Selecione um estado",
              value: "",
            }}
            onChangeHandler={(event) => {
              handleStateAbbChange(event);
              handleSelectedStateUpdate(event);
            }}
            optionsArray={statesOptionsFiller.map(({ sigla, nome }) => ({
              value: sigla,
              title: nome,
            }))}
          />
        </Input>

        {cities.map((city, index) => (
          <div className={styles.locationContainer}>
            <Input
              htmlFor="cityName"
              title="Digite o nome da cidade de atuação"
              className="inputContainer"
            >
              <Select
                name="cityName"
                value={city.cityName}
                className="defaultSelect"
                defaultOption={{
                  title: "Qualquer",
                  value: "",
                }}
                onChangeHandler={(event) => handleCitiesChange(event, index)}
                disabled={citiesOptionsFiller.length === 0}
                optionsArray={citiesOptionsFiller.map((cof) => ({
                  title: cof,
                  value: cof,
                }))}
              />
            </Input>

            <div className={styles.regionAreaContainer}>
              {city.regionArea.map(({ areaName }, regionIndex) => (
                <div className={styles.regionArea}>
                  <Input
                    htmlFor="areaName"
                    title="Selecione uma região"
                    className="inputContainer"
                  >
                    <Select
                      name="areaName"
                      value={areaName}
                      className="defaultSelect"
                      defaultOption={{
                        title: "Escolha uma região",
                        value: "",
                      }}
                      onChangeHandler={(event) =>
                        handleRegionAreaChange(event, index, regionIndex)
                      }
                      disabled={citiesOptionsFiller.length === 0}
                      optionsArray={regionsAreas}
                    />
                  </Input>
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
  );
};

export default Form;
