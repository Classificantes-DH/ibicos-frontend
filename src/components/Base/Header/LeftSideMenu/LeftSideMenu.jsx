import React from "react";

import styles from "./LeftSideMenu.module.scss";

import CompanyLogo from "./CompanyLogo/CompanyLogo";
import SearchForm from "./SearchForm/SearchForm";

const LeftSideMenu = () => (
  <div className={styles.leftSideContainer}>
    <CompanyLogo />
    <SearchForm />
  </div>
);

export default LeftSideMenu;
