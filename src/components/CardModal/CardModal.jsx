import React from "react";
import ReactDOM from "react-dom";

const CardModal = ({ isModalOpen, handleModalClose }) => {
  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <p>Eu sou um modal</p>
      <button onClick={handleModalClose} type="button">
        Click to close
      </button>
    </>,
    document.getElementById("modal-portal")
  );
};

export default CardModal;
