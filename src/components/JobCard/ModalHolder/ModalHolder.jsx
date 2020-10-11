import React, { useState } from "react";
import { JobCard, Modal } from "../../index";

// TO REFACTOR
import FormModal from "./FormModal/FormModal";
import OccasionalModal from "./OccasionalModal/OccasionalModal";

const TEST_CSS = {
  cursor: "pointer",
};

const ModalHolder = () => {
  const [isModalOpen, setIsOpen] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [isSuccessfullySent, setIsSuccessfullySent] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleFormSent = () => {
    setIsFormSent(!isFormSent);
    setIsSuccessfullySent(isSuccessfullySent);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen}>
        <FormModal
          handleModalClose={handleModalClose}
          handleFormSent={handleFormSent}
        />
      </Modal>
      <Modal isModalOpen={!isModalOpen && isFormSent}>
        <OccasionalModal
          handleFormSent={handleFormSent}
          isSuccessfullySent={isSuccessfullySent}
        />
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
