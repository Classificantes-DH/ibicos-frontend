import React from "react";
import PropTypes from "prop-types";
import styles from "./ExtensibleMenu.module.scss";
import NavItem from "../NavItem/NavItem";
import MobileOnlyExtendedMenu from "./MobileOnlyExtendedMenu/MobileOnlyExtendedMenu";
import ArrowDropDownIcon from "./ArrowDropDownIcon/ArrowDropDownIcon";

import {
  userIcon,
  loginIcon,
} from "../../../../../resources/imgs/utilityIcons/index";

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
        <NavItem
          imgData={{
            alt: "Nome de usuário",
            imgSrc: userIcon,
          }}
          onClick={handleExtendedMenuOpen}
        >
          <button onClick={handleExtendedMenuOpen} type="button">
            {username}
            <ArrowDropDownIcon isExtendedMenuOpen={isExtendedMenuOpen} />
          </button>
        </NavItem>
      ) : (
        <NavItem
          linkData={{
            label: "Entrar",
            path: "/login",
            onClickHandler: handleMenuToggle,
          }}
          imgData={{
            alt: "Ícone de login",
            imgSrc: loginIcon,
          }}
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
