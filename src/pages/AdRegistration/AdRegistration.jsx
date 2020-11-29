import React from "react";

import styles from "./AdRegistration.module.scss";

const AdRegistration = () => {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h2>Cadastre um novo anúncio</h2>
      </header>
      <div className={styles.formContainer}>
        <form method="POST">
          <div className={styles.inputContainer}>
            <label htmlFor="adDescription">
              <p>Descrição do anúncio</p>
              <textarea
                name="adDescription"
                className={styles.defaultTextArea}
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="serviceCategory">
              <p>Categoria de serviço</p>
              <select name="serviceCategory" className={styles.defaultSelect}>
                <option value="">Selecione uma categoria</option>
                <option value="1">Mecânico</option>
                <option value="2">Eletricista</option>
                <option value="3">Janeleiro</option>
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
                <select name="stateAbb" className={styles.defaultSelect}>
                  <option value="">Selecione um estado</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                </select>
              </label>
            </div>
            <div className={styles.locationContainer}>
              <div className={styles.inputContainer}>
                <label htmlFor="cityName">
                  <p>Digite o nome da cidade de atuação</p>
                  <input
                    type="text"
                    name="cityName"
                    className={styles.defaultInputText}
                  />
                </label>
              </div>

              <div className={styles.regionAreaContainer}>
                <div className={styles.regionArea}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="areaName">
                      <p>Selecione uma região</p>

                      <select name="areaName" className={styles.defaultSelect}>
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
                      className={`${styles.defaultButton} ${styles.addButton}`}
                    >
                      Adicionar região
                    </button>
                    {/* TODO: WE'RE GONNA HAVE ONLY ONE BUTTON PER CONTAINER */}
                    {/* <button
                      type="button"
                      className={`${styles.defaultButton} ${styles.removeButton}`}
                    >
                      Remover região
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={`${styles.defaultButton} ${styles.addButton}`}
            >
              Adicionar cidade de atuação
            </button>
          </div>

          <input
            type="submit"
            value="Cadastrar"
            className={`${styles.defaultButton} ${styles.formSendButton}`}
          />
        </form>
      </div>
    </div>
  );
};

export default AdRegistration;
