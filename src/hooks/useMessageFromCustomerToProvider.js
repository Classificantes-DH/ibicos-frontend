import { useState } from "react";

import api from "../api/api";

const useMessageFromCustomerToProvider = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [isMessageSuccessfullySent, setIsMessageSuccessfullySent] = useState(
    false
  );
  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInputMessage = (event) => {
    setInputMessage(event.target.value);
  };

  const handleModalReset = () => {
    setIsMessageSuccessfullySent(false);
    setHasError(false);
  };

  const handleSendMessage = async (
    event,
    customerUserInfo,
    providerUserInfo
  ) => {
    event.preventDefault();

    setIsLoading(true);

    const message = inputMessage;
    const {
      email: providerEmailAddress,
      person: { namePerson: providerName },
    } = providerUserInfo;
    const {
      email: customerEmailAddress,
      person: { namePerson: customerName },
    } = customerUserInfo;

    try {
      await api.post(
        "/api/v1/customer/ad/sendMessage",
        JSON.stringify({
          providerEmailAddress,
          customerEmailAddress,
          customerName,
          providerName,
          message,
        })
      );
      setIsMessageSuccessfullySent(true);
      setHasError(false);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    inputMessage,
    isMessageSuccessfullySent,
    hasError,
    handleChangeInputMessage,
    handleSendMessage,
    handleModalReset,
  };
};

export default useMessageFromCustomerToProvider;
