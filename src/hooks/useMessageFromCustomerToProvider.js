import { useState } from "react";

import api from "../api/api";

const useMessageFromCustomerToProvider = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [isMessageSuccessfullySent, setIsMessageSuccessfullySent] = useState(
    false
  );
  const [hasError, setHasError] = useState(false);

  const handleChangeInputMessage = (event) => {
    setInputMessage(event.target.value);
  };

  const handleOccasionalModalsReset = () => {
    setIsMessageSuccessfullySent(false);
    setHasError(false);
  };

  const handleSendMessage = async (
    event,
    customerUserInfo,
    providerUserInfo
  ) => {
    event.preventDefault();

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
    } catch (err) {
      console.log(err);
    }
  };

  return {
    inputMessage,
    isMessageSuccessfullySent,
    hasError,
    handleChangeInputMessage,
    handleSendMessage,
    handleOccasionalModalsReset,
  };
};

export default useMessageFromCustomerToProvider;
