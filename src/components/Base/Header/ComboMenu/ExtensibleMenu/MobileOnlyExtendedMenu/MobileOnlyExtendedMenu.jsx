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
);

export default MobileOnlyExtendedMenu;

MobileOnlyExtendedMenu.propTypes = {
  isExtendedMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
