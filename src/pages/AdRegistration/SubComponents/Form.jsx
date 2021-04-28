import React from "react";
import styles from "../AdRegistration.module.scss";
import Input from "../../../components/Utility/Input/Input";
import Select from "../../../components/Utility/Select/Select";
import Button from "../../../components/Utility/Button/Button";
import ProcessFeedback from "./ProcessFeedback";
import "./Input.scss";
import "./Select.scss";
import "./Button.scss";

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
        <Input htmlFor="stateAbb" title="Estado" className="inputContainer">
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
            <Input htmlFor="cityName" title="Cidade" className="inputContainer">
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
                    title="Região"
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
                  <Button
                    onClickHandler={(event) =>
                      handleRegionAreaDecrement(event, index, regionIndex)
                    }
                    containerClassName="btnContainer"
                    buttonClassName="defaultButton removeButton"
                    text="Remover região"
                    type="button"
                  />
                </div>
              ))}
            </div>
            <Button
              onClickHandler={(event) =>
                handleRegionAreaIncrement(event, index)
              }
              containerClassName="btnContainer"
              buttonClassName="defaultButton addButton"
              text="Adicionar região"
              type="button"
            />
          </div>
        ))}

        <Button
          onClickHandler={handleCityIncrement}
          containerClassName="btnContainer"
          buttonClassName="defaultButton addButton"
          text="Adicionar cidade"
          type="button"
        />
      </div>
      <Button
        onClickHandler={handleCityIncrement}
        containerClassName="btnContainer centralizedBtn"
        buttonClassName="defaultButton formSendButton"
        text="Cadastrar"
        type="submit"
      />
      <ProcessFeedback
        isAdSuccessfullyRegistered={isAdSuccessfullyRegistered}
      />
      <div className={styles.loadingSpinnerContainer}>
        <LoadingSpinner isLoading={isLoading} />
      </div>
    </form>
  );
};

export default Form;
