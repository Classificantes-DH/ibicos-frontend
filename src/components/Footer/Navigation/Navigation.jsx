import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <div className={styles.navigationContainer}>
    <h4 className={styles.sectionTitle}>{"> "}Navegação</h4>
    <nav>
      <ul className={styles.navigationUrls}>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/comoFunciona">Como Funciona</Link>
        </li>
        <li>
          <Link to="/cadastrar">Inscreva-se</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
