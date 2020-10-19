import { useState } from "react";

const useModalFormHooks = () => {
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

  const handleSendMessage = (event) => {
    event.preventDefault();
    new Promise((resolve, reject) => {
      const backendResult = Math.floor(Math.random() * 2 + 1);
      console.log("sending to the backend:", inputMessage);
      if (backendResult === 2) {
        reject(new Error("Backend Problems"));
      }
      resolve("Message Successfully sent!");
    })
      .then(() => setIsMessageSuccessfullySent(true))
      .catch((e) => {
        console.log(e);
        setHasError(true);
      });
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

export default useModalFormHooks;
