import React from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyLogo.module.scss";
import { companyLogo } from "../../../../../resources/imgs/utilityIcons/index";

const CompanyLogo = () => (
  <div className={styles.companyLogo}>
    <Link to="/">
      <img src={companyLogo} alt="Logo da empresa iBicos" />
      <h4>iBicos</h4>
    </Link>
  </div>
);

export default CompanyLogo;
