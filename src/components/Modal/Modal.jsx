import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./fade-animation.scss";
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

  const nodeRef = useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      timeout={200}
      in={isModalOpen}
      classNames="fade"
      unmountOnExit
      appear
    >
      <div className={styles.container}>
        <div className={styles.contentContainer} ref={nodeRef}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
