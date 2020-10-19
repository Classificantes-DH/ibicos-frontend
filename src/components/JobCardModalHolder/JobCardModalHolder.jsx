import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  JobCard,
  Modal,
  ResultMessageToProviderModal,
  CustomerMessageToProviderFormModal,
} from "../index";

import useModalFormHook from "../../hooks/useModalFormHook";

import styles from "./JobCardModalHolder.module.scss";

const JobCardModalHolder = ({ adInfo }) => {
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
  } = useModalFormHook();

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
        <JobCard adInfo={adInfo} />
      </div>
    </>
  );
};

JobCardModalHolder.propTypes = {
  adInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    evaluations: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        region: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCardModalHolder;
