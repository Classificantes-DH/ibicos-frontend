import React, { useState } from "react";
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
  megaphoneIcon,
} from "../../resources/imgs/utilityIcons/index";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

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

        <div
          className={`${styles.comboMenu} ${
            isBurgerActive ? `${styles.comboMenuActive}` : ``
          }`}
        >
          <ul>
            <li>
              <div className={styles.navItem}>
                <img src={homeIcon} alt="Ícone Home page" />
                <Link to="/" onClick={handleMenuToggle}>
                  Home
                </Link>
              </div>
            </li>

            <li>
              <div className={styles.navItem}>
                <img src={helpCircleIcon} alt="Ícone do como funciona" />
                <Link to="/comoFunciona" onClick={handleMenuToggle}>
                  Como funciona?
                </Link>
              </div>
            </li>

            <li>
              <div className={styles.navItem}>
                <img src={megaphoneIcon} alt="Ícone de anúncio" />
                <Link to="/listaClassificados" onClick={handleMenuToggle}>
                  Anúncios
                </Link>
              </div>
            </li>

            {/* Check if the user is logged in */}
            {true ? (
              <li>
                <div className={styles.navItem}>
                  <img src={configToolIcon} alt="Ícone de anúncio" />
                  <Link to="/listaServicos" onClick={handleMenuToggle}>
                    Meus anúncios
                  </Link>
                </div>
              </li>
            ) : null}

            <li className={styles.extensibleDropDown}>
              {/* Check if the user is logged in */}
              {true ? (
                <div className={styles.navItem}>
                  <img src={userIcon} alt="Ícone do usuário" />
                  <button onClick={handleExtendedMenuOpen} type="button">
                    <div className={styles.navItem}>
                      <span>fulano.silva</span>
                      <i
                        className={`${styles.arrowIcon} ${
                          isExtendedMenuOpen ? `${styles.activeExtended}` : ``
                        }`}
                      />
                    </div>
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
                    <div className={styles.navItem}>
                      <Link to="/meu-perfil" onClick={handleMenuToggle}>
                        Meu Perfil
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.navItem}>
                      <Link to="/notificacao" onClick={handleMenuToggle}>
                        Notificação
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.navItem}>
                      <Link to="/favoritos" onClick={handleMenuToggle}>
                        Favoritos
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.navItem}>
                      <Link to="/prestadorDashBoard" onClick={handleMenuToggle}>
                        Visão prestador
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.navItem}>
                      <Link to="/clienteDashBoard" onClick={handleMenuToggle}>
                        Visão cliente
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={styles.navItem}>
                      <Link to="/sair" onClick={handleMenuToggle}>
                        Sair
                      </Link>
                    </div>
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
