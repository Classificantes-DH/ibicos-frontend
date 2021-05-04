import React from "react";

import styles from "./Header.module.scss";

import ComboMenu from "./ComboMenu/ComboMenu";
import BackgroundCover from "./BackgroundCover/BackgroundCover";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import LeftSideMenu from "./LeftSideMenu/LeftSideMenu";
import useHeaderHook from "../../../hooks/useHeaderHook";

const Header = () => {
  const {
    isUserAuthenticated,
    handleLogout,
    handleMenuToggle,
    handleExtendedMenuOpen,
    username,
    isBurgerActive,
    isExtendedMenuOpen,
  } = useHeaderHook();

  return (
    <header>
      <BackgroundCover
        isBurgerActive={isBurgerActive}
        handleMenuToggle={handleMenuToggle}
      />

      <div className={styles.container}>
        <LeftSideMenu />

        <BurgerMenu
          handleMenuToggle={handleMenuToggle}
          isBurgerActive={isBurgerActive}
        />

        <ComboMenu
          isBurgerActive={isBurgerActive}
          handleMenuToggle={handleMenuToggle}
          isUserAuthenticated={isUserAuthenticated}
          handleExtendedMenuOpen={handleExtendedMenuOpen}
          username={username}
          isExtendedMenuOpen={isExtendedMenuOpen}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
