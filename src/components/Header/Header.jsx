import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import {
  companyLogo,
  searchIcon,
  helpCircleIcon,
  configToolIcon,
  userIcon,
  loginIcon,
  homeIcon,
} from "../../resources/imgs/utilityIcons/index";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBurgerActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBurgerActive]);

  const handleMenuToggle = () => {
    setIsBurgerActive(!isBurgerActive);
    setIsExtendedMenuOpen(false);
  };

  const handleExtendedMenuOpen = () => {
    setIsExtendedMenuOpen(!isExtendedMenuOpen);
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
        <div className={styles.companyLogo}>
          <Link to="/">
            <img src={companyLogo} alt="Logo da empresa iBicos" />
            <h4>iBicos</h4>
          </Link>
        </div>

        <div>
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

        <div
          className={`${styles.comboMenu} ${
            isBurgerActive ? `${styles.comboMenuActive}` : ``
          }`}
        >
          <ul>
            <li>
              <div className={styles.navItem}>
                <img src={homeIcon} alt="Ícone Home page" />
                <Link to="/">Home</Link>
              </div>
            </li>

            <li>
              <div className={styles.navItem}>
                <img src={helpCircleIcon} alt="Ícone funciona" />
                <Link to="/comoFunciona">Como funciona?</Link>
              </div>
            </li>

            <li>
              <div className={styles.navItem}>
                <img src={configToolIcon} alt="Ícone de anúncio" />
                <Link to="/listaClassificados">Anúncios</Link>
              </div>
            </li>

            <li className={styles.extensibleDropDown}>
              {/* Check if the user is logged in */}
              {true ? (
                <div className={styles.navItem}>
                  <img src={userIcon} alt="Ícone do usuário" />
                  <button onClick={handleExtendedMenuOpen} type="button">
                    fulano.silva
                    <i
                      className={`${styles.arrowIcon} ${
                        isExtendedMenuOpen ? `${styles.activeExtended}` : ``
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <div className={styles.navItem}>
                  <img src={loginIcon} alt="Login icon" />
                  <Link to="/login">Entrar</Link>
                </div>
              )}
              {/* Mobile extended menu */}
              <div
                className={`${styles.extendedLoggedInMenu} ${
                  isExtendedMenuOpen
                    ? `${styles.extendedLoggedInMenuActive}`
                    : ``
                }`}
              >
                <ul>
                  <li>
                    <Link to="/meu-perfil">Meu Perfil</Link>
                  </li>
                  <li>
                    <Link to="/notificacao">Notificação</Link>
                  </li>
                  <li>
                    <Link to="/favoritos">Favoritos</Link>
                  </li>
                  <li>
                    <Link to="/estatisticas">Estatísticas</Link>
                  </li>
                  <li>
                    <Link to="/sair">Sair</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
