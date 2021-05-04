import React from "react";
import PropTypes from "prop-types";
import styles from "./ComboMenu.module.scss";

import {
  helpCircleIcon,
  configToolIcon,
  homeIcon,
  megaphoneIcon,
} from "../../../../resources/imgs/utilityIcons/index";

import NavItem from "./NavItem/NavItem";
import ExtensibleMenu from "./ExtensibleMenu/ExtensibleMenu";

const ComboMenu = ({
  isBurgerActive,
  handleMenuToggle,
  isUserAuthenticated,
  handleExtendedMenuOpen,
  username,
  isExtendedMenuOpen,
  handleLogout,
}) => {
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
        <ExtensibleMenu
          isUserAuthenticated={isUserAuthenticated}
          handleExtendedMenuOpen={handleExtendedMenuOpen}
          username={username}
          isExtendedMenuOpen={isExtendedMenuOpen}
          handleMenuToggle={handleMenuToggle}
          handleLogout={handleLogout}
        />
      </ul>
    </div>
  );
};

export default ComboMenu;

ComboMenu.propTypes = {
  isBurgerActive: PropTypes.bool.isRequired,
  handleExtendedMenuOpen: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isExtendedMenuOpen: PropTypes.bool.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
