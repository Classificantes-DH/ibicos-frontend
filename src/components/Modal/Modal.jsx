import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ isModalOpen, children }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.contentContainer}>{children}</div>
    </div>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
