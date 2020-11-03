import React, { useState } from "react";
import styles from "./Header.module.scss";
import {
  companyLogo,
  searchIcon,
} from "../../resources/imgs/utilityIcons/index";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleMenuToggle = () => {
    setIsBurgerActive(!isBurgerActive);
  };
  return (
    <header className={styles.container}>
      <div className={styles.companyLogo}>
        <img src={companyLogo} alt="Logo da empresa iBicos" />
        <h4>iBicos</h4>
      </div>
      <div className={styles.searchAd}>
        <input type="text" placeholder="Pesquise nossos anunciantes!" />
        <button className={styles.searchIconContainer} type="button">
          <img src={searchIcon} alt="Ícone da lupa" />
        </button>
      </div>
      <div
        className={styles.burgerMenu}
        onClick={handleMenuToggle}
        role="button"
        onKeyPress={handleMenuToggle}
        tabIndex={0}
      >
        <button
          type="button"
          className={`${styles.burgerMenu} ${
            isBurgerActive ? `${styles.burgerActive}` : ``
          }`}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
      </div>
    </header>
  );
};

export default Header;
