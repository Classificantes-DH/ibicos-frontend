import React from "react";
import PropTypes from "prop-types";
import styles from "./CustomerMessageToProviderFormModal.module.scss";

import Header from "./Header/Header";
import EmailSuccessfullySent from "./EmailSuccessfullySent/EmailSuccessfullySent";
import MessageSubmission from "./MessageSubmission/MessageSubmission";

const CustomerMessageToProviderFormModal = ({
  handleModalEvent,
  handleSendMessage,
  inputMessage,
  handleChangeInputMessage,
  isLoading,
  handleModalReset,
  isMessageSuccessfullySent,
}) => {
  return (
    <div className={styles.container}>
      <Header
        onClickHandlers={{
          handleModalEvent,
          handleModalReset,
        }}
      />
      {isMessageSuccessfullySent ? (
        <EmailSuccessfullySent
          onClickHandler={{ handleModalEvent, handleModalReset }}
        />
      ) : (
        <MessageSubmission
          handleChangeInputMessage={handleChangeInputMessage}
          inputMessage={inputMessage}
          isLoading={isLoading}
          handleSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

CustomerMessageToProviderFormModal.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
  handleModalEvent: PropTypes.func.isRequired,
  handleModalReset: PropTypes.func.isRequired,
  inputMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isMessageSuccessfullySent: PropTypes.bool.isRequired,
  handleChangeInputMessage: PropTypes.func.isRequired,
};

export default CustomerMessageToProviderFormModal;
