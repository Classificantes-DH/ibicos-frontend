import React from "react";

import PropTypes from "prop-types";
import verifiedIcon from "../../resources/imgs/utilityIcons/check.svg";

import styles from "./AccountVerificationConfirmation.module.scss";
import { useSignInConfirmationHook } from "../../hooks/index";

const AccountVerificationConfirmation = ({ location: { search } }) => {
  useSignInConfirmationHook(search);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={verifiedIcon} alt="Logo de verificação" />
      </div>
      <header>
        <h1>Cadastro confirmada com sucesso!</h1>
        <h1>Você já pode acessar sua conta</h1>
      </header>
    </div>
  );
};

AccountVerificationConfirmation.propTypes = {
  location: PropTypes.node.isRequired,
  search: PropTypes.node.isRequired,
};

export default AccountVerificationConfirmation;
