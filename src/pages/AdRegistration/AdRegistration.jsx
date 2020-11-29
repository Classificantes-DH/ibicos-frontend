import React from "react";

const AdRegistration = () => {
  return (
    <div className="">
      <header>
        <h2>Cadastre um novo anúncio</h2>
      </header>
      <div className="formContainer">
        <form method="POST">
          <label htmlFor="adDescription">
            <p>Descrição do anúncio</p>
            <textarea name="adDescription" />
          </label>
          <label htmlFor="serviceCategory">
            <p>Categoria de serviço</p>
            <select name="serviceCategory">
              <option value="">Selecione uma categoria</option>
              <option value="1">Mecânico</option>
              <option value="2">Eletricista</option>
              <option value="3">Janeleiro</option>
            </select>
          </label>

          <div className="workLocationContainer">
            <header>
              <h4>Locais de atuação</h4>
            </header>

            <div className="locationContainer">
              <label htmlFor="stateAbb">
                <p>Selecione o Estado de atuação</p>
                <select name="stateAbb" id="">
                  <option value="">Selecione um estado</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                </select>
              </label>

              <label htmlFor="cityName">
                <p>Digite o nome da cidade de atuação</p>
                <input type="text" name="cityName" />
              </label>

              <div className="regionAreaContainer">
                <div className="regionArea">
                  <label htmlFor="areaName">
                    <p>Selecione uma região</p>
                    <select name="areaName">
                      <option value="">Escolha uma região</option>
                      <option value="Zona Sul">Zona Sul</option>
                      <option value="Zona Leste">Zona Leste</option>
                      <option value="Zona Oeste">Zona Oeste</option>
                      <option value="Zona Norte">Zona Norte</option>
                    </select>
                  </label>
                  <button type="button">Remover região</button>
                </div>
                <button type="button">Adicionar região</button>
              </div>
            </div>
            <button type="button">Adicionar local de atuação</button>
          </div>

          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default AdRegistration;
