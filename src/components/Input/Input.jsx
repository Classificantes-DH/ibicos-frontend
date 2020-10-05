import React from "react";

import styles from "./Input.module.scss";

const Input = ({ label, name, type = "text", ...rest }) => {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...rest} />
    </div>
  );
};

export default Input;
