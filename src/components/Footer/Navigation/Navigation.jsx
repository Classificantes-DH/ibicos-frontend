import React from "react";
import styles from "./Navigation.module.scss";
import NavigationUrl from "./NavigationUrl/NavigationUrl";

const Navigation = () => (
  <div className={styles.navigationContainer}>
    <h4 className={styles.sectionTitle}>{"> "}Navegação</h4>
    <nav>
      <ul className={styles.navigationUrls}>
        <NavigationUrl to="/" text="Home" />
        <NavigationUrl to="/comoFunciona" text="Como Funciona" />
        <NavigationUrl to="/cadastrar" text="Inscreva-se" />
        <NavigationUrl to="/login" text="Login" />
      </ul>
    </nav>
  </div>
);

export default Navigation;
