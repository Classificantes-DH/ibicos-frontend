import React, { useState, useContext } from "react";

import styles from "./Header.module.scss";

import { SessionContext } from "../../context/SessionContext/SessionContext";
import { Context } from "../../context/AuthContext/AuthContext";

import ComboMenu from "./ComboMenu/ComboMenu";
import BackgroundCover from "./BackgroundCover/BackgroundCover";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import LeftSideMenu from "./LeftSideMenu/LeftSideMenu";

const Header = () => {
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
