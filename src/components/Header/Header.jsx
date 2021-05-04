import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import {
  companyLogo,
  searchIcon,
} from "../../resources/imgs/utilityIcons/index";

import ComboMenu from "./ComboMenu/ComboMenu";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleMenuToggle = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <header>
      <div
        className={`${styles.backgroundCover} ${
          isBurgerActive ? `${styles.backgroundCoverActive}` : ``
        }`}
        onClick={handleMenuToggle}
        role="button"
        aria-label="Menu background"
        onKeyPress={handleMenuToggle}
        tabIndex={0}
      />

      <div className={styles.container}>
        <div className={styles.leftSideContainer}>
          <div className={styles.companyLogo}>
            <Link to="/">
              <img src={companyLogo} alt="Logo da empresa iBicos" />
              <h4>iBicos</h4>
            </Link>
          </div>

          <form
            className={styles.searchAd}
            action="/listaClassificados"
            method="GET"
          >
            <input
              type="text"
              placeholder="Pesquise nossos anunciantes!"
              name="category"
            />
            <button className={styles.searchIconContainer} type="button">
              <img src={searchIcon} alt="Ícone da lupa" />
            </button>
          </form>
        </div>

        <div className={styles.burgerMenu}>
          <button
            type="button"
            onClick={handleMenuToggle}
            className={`${styles.burgerMenu} ${
              isBurgerActive ? `${styles.burgerActive}` : ``
            }`}
          >
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
          </button>
        </div>
        <ComboMenu />
      </div>
    </header>
  );
};

export default Header;
