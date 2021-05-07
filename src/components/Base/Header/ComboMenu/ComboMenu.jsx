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
          linkData={{
            path: "/",
            label: "Home",
            onClickHandler: handleMenuToggle,
          }}
          imgData={{
            alt: "Ícone Home page",
            imgSrc: homeIcon,
          }}
        />
        <NavItem
          linkData={{
            path: "/comoFunciona",
            label: "Como funciona?",
            onClickHandler: handleMenuToggle,
          }}
          imgData={{
            alt: "Ícone do como funciona",
            imgSrc: helpCircleIcon,
          }}
        />

        {isUserAuthenticated ? (
          <NavItem
            linkData={{
              path: "/listaClassificados",
              label: "Anúncios",
              onClickHandler: handleMenuToggle,
            }}
            imgData={{
              alt: "Ícone de anúncio",
              imgSrc: megaphoneIcon,
            }}
          />
        ) : null}

        {isUserAuthenticated ? (
          <NavItem
            linkData={{
              path: "/listaServicos",
              label: "Meus anúncios",
              onClickHandler: handleMenuToggle,
            }}
            imgData={{
              alt: "Ícone de anúncio",
              imgSrc: configToolIcon,
            }}
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
