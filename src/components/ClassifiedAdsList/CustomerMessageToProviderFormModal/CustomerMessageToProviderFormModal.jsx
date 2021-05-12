import React from "react";
import PropTypes from "prop-types";
import styles from "./CustomerMessageToProviderFormModal.module.scss";
import { LoadingSpinner } from "../../index";
import Header from "./Header/Header";
import EmailSuccessfullySent from "./EmailSuccessfullySent/EmailSuccessfullySent";

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
        <div className={styles.contentContainer}>
          <div className={styles.introContent}>
            <p>
              <strong>Se interessou?</strong> Entre em contato agora mesmo com o
              profissional!
            </p>
          </div>
          <form
            className={styles.formContainer}
            onSubmit={(event) => {
              handleSendMessage(event);
            }}
          >
            <textarea
              placeholder="Insira sua mensagem"
              onChange={handleChangeInputMessage}
              value={inputMessage}
            />

            <div className={styles.messageSendingContainer}>
              <button type="submit">Enviar</button>
              <div className={styles.loadingSpinnerContainer}>
                <LoadingSpinner isLoading={isLoading} />
              </div>
            </div>
          </form>
        </div>
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
