import React, { useState } from "react";
import styles from "./ModalHolder.module.scss";
import { JobCard, Modal } from "../../index";

const TEST_CSS = {
  cursor: "pointer",
};

const ModalHolder = () => {
  const [isModalOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}> */}
      <Modal isModalOpen={isModalOpen}>
        <div className={styles.contentContainer}>
          <p>Children do modal</p>
          <button onClick={handleModalClose} type="button">
            Click to close
          </button>
          <p>Eu sou um modal</p>
        </div>
      </Modal>
      <div
        style={TEST_CSS}
        onClick={handleModalOpen}
        role="button"
        onKeyPress={handleModalOpen}
        tabIndex={0}
      >
        <JobCard />
      </div>
    </>
  );
};

export default ModalHolder;
