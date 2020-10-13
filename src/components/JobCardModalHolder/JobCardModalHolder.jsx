import React, { useState } from "react";
import {
  JobCard,
  Modal,
  ResultMessageToProviderModal,
  CustomerMessageToProviderFormModal,
} from "../index";

import useModalFormHooks from "../../hooks/useModalFormHooks";

import styles from "./JobCardModalHolder.module.scss";

const JobCardModalHolder = () => {
  const [isModalOpen, setIsOpen] = useState(false);

  const handleModalEvent = () => {
    setIsOpen(!isModalOpen);
  };

  const {
    inputMessage,
    isMessageSuccessfullySent,
    hasError,
    handleChangeInputMessage,
    handleSendMessage,
    handleOccasionalModalsReset,
  } = useModalFormHooks();

  return (
    <>
      <Modal isModalOpen={isModalOpen}>
        <CustomerMessageToProviderFormModal
          inputMessage={inputMessage}
          handleChangeInputMessage={handleChangeInputMessage}
          handleModalEvent={handleModalEvent}
          handleSendMessage={handleSendMessage}
        />
      </Modal>
      <Modal
        isModalOpen={!isModalOpen && (isMessageSuccessfullySent || hasError)}
      >
        <ResultMessageToProviderModal
          handleOccasionalModalsReset={handleOccasionalModalsReset}
          hasError={hasError}
        />
      </Modal>
      <div
        className={styles.container}
        onClick={handleModalEvent}
        role="button"
        onKeyPress={handleModalEvent}
        tabIndex={0}
      >
        <JobCard />
      </div>
    </>
  );
};

export default JobCardModalHolder;
