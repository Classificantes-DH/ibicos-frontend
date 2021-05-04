import { useState, useContext } from "react";

import { SessionContext } from "../context/SessionContext/SessionContext";
import { Context } from "../context/AuthContext/AuthContext";

const useHeaderHook = () => {
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

  return {
    isUserAuthenticated,
    handleLogout,
    handleMenuToggle,
    handleExtendedMenuOpen,
    username,
    isBurgerActive,
  };
};

export default useHeaderHook;
