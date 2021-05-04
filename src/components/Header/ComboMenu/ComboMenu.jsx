import React, { useState, useContext } from "react";

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
        <NavItem
          imgData={{
            alt: "Ícone do como funciona",
            imgSrc: helpCircleIcon,
          }}
          label="Como funciona?"
          path="/comoFunciona"
          onClickHandler={handleMenuToggle}
        />

        {/* Check if the user is logged in */}
        {isUserAuthenticated ? (
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
            <NavItem
              label="Entrar"
              imgData={{
                alt: "Ícone de login",
                imgSrc: loginIcon,
              }}
              path="/login"
              onClickHandler={handleMenuToggle}
            />
          )}
          {/* Mobile extended menu */}
          <div
            className={`${styles.extendedLoggedInMenu} ${
              isExtendedMenuOpen ? `${styles.extendedLoggedInMenuActive}` : ``
            }`}
          >
            <ul>
              <NavItem
                label="Meu Perfil"
                path="/meu-perfil"
                onClickHandler={handleMenuToggle}
              />

              <NavItem
                label="Cadastrar anúncio"
                path="/cadastrarAnuncio"
                onClickHandler={handleMenuToggle}
              />

              <NavItem
                label="Favoritos"
                path="/favoritos"
                onClickHandler={handleMenuToggle}
              />

              <NavItem
                label="Visão prestador"
                path="/prestadorDashBoard"
                onClickHandler={handleMenuToggle}
              />

              <NavItem
                label="Visão cliente"
                path="/clienteDashBoard"
                onClickHandler={handleMenuToggle}
              />
              <NavItem
                label="Sair"
                path="/login"
                onClickHandler={() => {
                  handleMenuToggle();
                  handleLogout();
                }}
              />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ComboMenu;
