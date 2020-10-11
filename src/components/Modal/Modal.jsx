import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ isModalOpen, children }) => {
  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
