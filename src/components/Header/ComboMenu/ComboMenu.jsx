import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ComboMenu.module.scss";

import {
  helpCircleIcon,
  configToolIcon,
  userIcon,
  loginIcon,
  homeIcon,
  megaphoneIcon,
} from "../../../resources/imgs/utilityIcons/index";

import { SessionContext } from "../../../context/SessionContext/SessionContext";
import { Context } from "../../../context/AuthContext/AuthContext";
import NavItem from "./NavItem/NavItem";

const ComboMenu = () => {
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
    <div
      className={`${styles.comboMenu} ${
        isBurgerActive ? `${styles.comboMenuActive}` : ``
      }`}
    >
      <ul>
        <NavItem
          imgData={{
            alt: "Ícone Home page",
            imgSrc: homeIcon,
          }}
          path="/"
          label="Home"
          onClickHandler={handleMenuToggle}
        />
        {/* <li>
          <div className={styles.navItem}>
          <img src={homeIcon} alt="Ícone Home page" />
          <Link to="/" onClick={handleMenuToggle}>
          Home
          </Link>
          </div>
        </li> */}
        <NavItem
          imgData={{
            alt: "Ícone do como funciona",
            imgSrc: helpCircleIcon,
          }}
          label="Como funciona?"
          path="/comoFunciona"
          onClickHandler={handleMenuToggle}
        />

        {/* <li>
          <div className={styles.navItem}>
            <img src={helpCircleIcon} alt="Ícone do como funciona" />
            <Link to="/comoFunciona" onClick={handleMenuToggle}>
              Como funciona?
            </Link>
          </div>
        </li> */}

        {/* Check if the user is logged in */}
        {isUserAuthenticated ? (
          // <li>
          //   <div className={styles.navItem}>
          //     <img src={megaphoneIcon} alt="Ícone de anúncio" />
          //     <Link to="/listaClassificados" onClick={handleMenuToggle}>
          //       Anúncios
          //     </Link>
          //   </div>
          // </li>
          <NavItem
            imgData={{
              alt: "Ícone de anúncio",
              imgSrc: megaphoneIcon,
            }}
            label="Anúncios"
            path="/listaClassificados"
            onClickHandler={handleMenuToggle}
          />
        ) : null}

        {isUserAuthenticated ? (
          // <li>
          //   <div className={styles.navItem}>
          //     <img src={configToolIcon} alt="Ícone de anúncio" />
          //     <Link to="/listaServicos" onClick={handleMenuToggle}>
          //       Meus anúncios
          //     </Link>
          //   </div>
          // </li>
          <NavItem
            imgData={{
              alt: "Ícone de anúncio",
              imgSrc: configToolIcon,
            }}
            label="Meus anúncios"
            path="/listaServicos"
            onClickHandler={handleMenuToggle}
          />
        ) : null}

        <li className={styles.extensibleDropDown}>
          {/* Check if the user is logged in */}
          {isUserAuthenticated ? (
            <div className={styles.navItem}>
              <img src={userIcon} alt="Ícone do usuário" />
              <button onClick={handleExtendedMenuOpen} type="button">
                <div className={styles.navItem}>
                  <span>{username}</span>
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
              <Link to="/login" onClick={handleMenuToggle}>
                Entrar
              </Link>
            </div>
          )}
          {/* Mobile extended menu */}
          <div
            className={`${styles.extendedLoggedInMenu} ${
              isExtendedMenuOpen ? `${styles.extendedLoggedInMenuActive}` : ``
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
                  <Link to="/cadastrarAnuncio" onClick={handleMenuToggle}>
                    Cadastrar anúncio
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
                  <Link
                    to="/login"
                    onClick={() => {
                      handleMenuToggle();
                      handleLogout();
                    }}
                  >
                    Sair
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ComboMenu;
