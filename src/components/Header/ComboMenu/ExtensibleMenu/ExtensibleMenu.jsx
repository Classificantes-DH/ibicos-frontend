import React from "react";
import PropTypes from "prop-types";
import styles from "./ExtensibleMenu.module.scss";
import NavItem from "../NavItem/NavItem";
import MobileOnlyExtendedMenu from "./MobileOnlyExtendedMenu/MobileOnlyExtendedMenu";

import {
  userIcon,
  loginIcon,
} from "../../../../resources/imgs/utilityIcons/index";

const ExtensibleMenu = ({
  isUserAuthenticated,
  handleExtendedMenuOpen,
  username,
  isExtendedMenuOpen,
  handleMenuToggle,
  handleLogout,
}) => {
  return (
    <li className={styles.extensibleDropDown}>
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
      <MobileOnlyExtendedMenu
        isExtendedMenuOpen={isExtendedMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleLogout={handleLogout}
      />
    </li>
  );
};

export default ExtensibleMenu;

ExtensibleMenu.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired,
  handleExtendedMenuOpen: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isExtendedMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
