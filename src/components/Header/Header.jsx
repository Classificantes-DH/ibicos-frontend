import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import { SessionContext } from "../../context/SessionContext/SessionContext";
import { Context } from "../../context/AuthContext/AuthContext";

import {
  companyLogo,
  searchIcon,
} from "../../resources/imgs/utilityIcons/index";

import ComboMenu from "./ComboMenu/ComboMenu";
import BackgroundCover from "./BackgroundCover/BackgroundCover";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

  const { isUserAuthenticated, handleLogout } = useContext(Context);

  const { userInfo } = useContext(SessionContext);

  const [username] = useState(userInfo ? userInfo.email.split("@")[0] : "");

  const handleMenuToggle = () => {
    setIsBurgerActive(!isBurgerActive);
    setIsExtendedMenuOpen(false);
  };

  const handleExtendedMenuOpen = () => {
    setIsExtendedMenuOpen(!isExtendedMenuOpen);
  };

  return (
    <header>
      <BackgroundCover
        isBurgerActive={isBurgerActive}
        handleMenuToggle={handleMenuToggle}
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

        <BurgerMenu
          handleMenuToggle={handleMenuToggle}
          isBurgerActive={isBurgerActive}
        />

        <ComboMenu
          isBurgerActive={isBurgerActive}
          handleMenuToggle={handleMenuToggle}
          isUserAuthenticated={isUserAuthenticated}
          handleExtendedMenuOpen={handleExtendedMenuOpen}
          username={username}
          isExtendedMenuOpen={isExtendedMenuOpen}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
