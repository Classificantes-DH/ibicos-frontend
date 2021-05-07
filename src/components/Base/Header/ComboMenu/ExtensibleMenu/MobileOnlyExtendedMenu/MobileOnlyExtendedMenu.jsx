import React from "react";
import PropTypes from "prop-types";
import styles from "./MobileOnlyExtendedMenu.module.scss";
import NavItem from "../../NavItem/NavItem";

const MobileOnlyExtendedMenu = ({
  isExtendedMenuOpen,
  handleMenuToggle,
  handleLogout,
}) => (
  <div
    className={`${styles.extendedLoggedInMenu} ${
      isExtendedMenuOpen ? `${styles.extendedLoggedInMenuActive}` : ``
    }`}
  >
    <ul>
      <NavItem
        linkData={{
          path: "/meu-perfil",
          label: "Meu Perfil",
          onClickHandler: handleMenuToggle,
        }}
      />

      <NavItem
        linkData={{
          path: "/cadastrarAnuncio",
          label: "Cadastrar anúncio",
          onClickHandler: handleMenuToggle,
        }}
      />

      <NavItem
        linkData={{
          path: "/favoritos",
          label: "Favoritos",
          onClickHandler: handleMenuToggle,
        }}
      />

      <NavItem
        linkData={{
          path: "/prestadorDashBoard",
          label: "Visão prestador",
          onClickHandler: handleMenuToggle,
        }}
      />

      <NavItem
        linkData={{
          path: "/clienteDashBoard",
          label: "Visão cliente",
          onClickHandler: handleMenuToggle,
        }}
      />
      <NavItem
        linkData={{
          path: "/login",
          label: "Sair",
          onClickHandler: handleLogout,
        }}
      />
    </ul>
  </div>
);

export default MobileOnlyExtendedMenu;

MobileOnlyExtendedMenu.propTypes = {
  isExtendedMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
