import React from "react";
import { searchIcon } from "../../../../resources/imgs/utilityIcons/index";
import styles from "./SearchForm.module.scss";

const SearchForm = () => (
  <form className={styles.searchAd} action="/listaClassificados" method="GET">
    <input
      type="text"
      placeholder="Pesquise nossos anunciantes!"
      name="category"
    />
    <button className={styles.searchIconContainer} type="button">
      <img src={searchIcon} alt="Ícone da lupa" />
    </button>
  </form>
);

export default SearchForm;
