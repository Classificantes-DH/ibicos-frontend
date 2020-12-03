import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { JobCard, Modal, CustomerMessageToProviderFormModal } from "../index";

import useMessageFromCustomerToProvider from "../../hooks/useMessageFromCustomerToProvider";

import styles from "./JobCardModalHolder.module.scss";

import { SessionContext } from "../../context/SessionContext/SessionContext";

const JobCardModalHolder = ({ adInfo }) => {
  const [isModalOpen, setIsOpen] = useState(false);

  const {
    isLoading,
    inputMessage,
    isMessageSuccessfullySent,
    hasError,
    handleChangeInputMessage,
    handleSendMessage,
    handleModalReset,
  } = useMessageFromCustomerToProvider();

  const { userInfo: customerUserInfo } = useContext(SessionContext);
  if (!customerUserInfo) {
    return null;
  }
  const { user: providerUserInfo } = adInfo;
  const { email: customerEmail } = customerUserInfo;
  const { email: providerEmail } = providerUserInfo;

  const handleModalEvent = () => {
    console.log("aa");
    if (customerEmail !== providerEmail) {
      setIsOpen(!isModalOpen);
    }
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen}>
        <CustomerMessageToProviderFormModal
          inputMessage={inputMessage}
          handleChangeInputMessage={handleChangeInputMessage}
          handleModalEvent={(event) => {
            handleModalEvent(event);
          }}
          handleSendMessage={(event) => {
            handleSendMessage(event, customerUserInfo, providerUserInfo);
          }}
          isMessageSuccessfullySent={isMessageSuccessfullySent}
          hasError={hasError}
          isLoading={isLoading}
          handleModalReset={() => {
            handleModalReset();
            handleModalReset();
          }}
        />
      </Modal>
      {/* <Modal
        isModalOpen={!isModalOpen && (isMessageSuccessfullySent || hasError)}
      >
        <ResultMessageToProviderModal
          handleOccasionalModalsReset={handleOccasionalModalsReset}
          hasError={hasError}
        />
      </Modal> */}
      <div
        className={styles.container}
        onClick={handleModalEvent}
        role="button"
        onKeyPress={handleModalEvent}
        tabIndex={0}
      >
        <JobCard
          adInfo={adInfo}
          isCustomerAndProviderTheSame={customerEmail === providerEmail}
        />
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

    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isAccountConfirmed: PropTypes.bool,
      notice: PropTypes.bool,
    }),

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
