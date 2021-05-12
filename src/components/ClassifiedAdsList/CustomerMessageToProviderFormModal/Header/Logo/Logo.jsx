import React from "react";
import styles from "./Logo.module.scss";
import { companyLogo } from "../../../../../resources/imgs/utilityIcons/index";

const Logo = () => (
  <div className={styles.logoContainer}>
    <img src={companyLogo} alt="iBicos Logo" />
  </div>
);

export default Logo;
