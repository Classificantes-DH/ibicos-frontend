import React from "react";
import PropTypes from "prop-types";

import styles from "./LoginError.module.scss";

const LoginError = ({ isCredentialInvalid }) =>
  isCredentialInvalid ? (
    <p className={styles.loginErrorMessage}>Credenciais inválidas</p>
  ) : null;

export default LoginError;

LoginError.propTypes = {
  isCredentialInvalid: PropTypes.bool.isRequired,
};
