import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { JobCard, Modal, CustomerMessageToProviderFormModal } from "../index";
import useMessageFromCustomerToProvider from "../../hooks/useMessageFromCustomerToProvider";
import styles from "./JobCardModalHolder.module.scss";

import { SessionContext } from "../../context/SessionContext/SessionContext";

const JobCardModalHolder = ({ adData }) => {
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

  if (!customerUserInfo || !adData) {
    return null;
  }

  const {
    ad: { user: providerUserInfo, service_category: serviceCategory },
  } = adData;
  const { id: customerId } = customerUserInfo;
  const { id: providerId } = providerUserInfo;

  const handleModalEvent = () => {
    if (customerId !== providerId) {
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
            handleSendMessage(
              event,
              customerUserInfo,
              providerUserInfo,
              serviceCategory
            );
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
          adData={adData}
          isCustomerAndProviderTheSame={customerId === providerId}
        />
      </div>
    </>
  );
};

JobCardModalHolder.propTypes = {
  adData: PropTypes.shape({
    ad: PropTypes.shape({
      id: PropTypes.number,
      ad_description: PropTypes.string.isRequired,

      service_category: PropTypes.shape({
        category_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,

      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,

      cities: PropTypes.arrayOf(
        PropTypes.shape({
          city_name: PropTypes.string.isRequired,
          state_name: PropTypes.string.isRequired,
          id: PropTypes.number,
          region_area: PropTypes.arrayOf(
            PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
                area_name: PropTypes.string.isRequired,
              })
            )
          ),
        })
      ).isRequired,
    }).isRequired,
    provider_statistics: PropTypes.shape({
      id: PropTypes.number,
      visualizations: PropTypes.number,
      statistics: PropTypes.shape({
        id: PropTypes.number,
        evaluation: PropTypes.number.isRequired,
        evaluations_counter: PropTypes.number.isRequired,
        messages_counter: PropTypes.number,
        hired_services_counter: PropTypes.number,
      }).isRequired,
    }),
  }).isRequired,
};

export default JobCardModalHolder;
