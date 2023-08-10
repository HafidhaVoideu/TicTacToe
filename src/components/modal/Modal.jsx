import React, { useContext } from "react";

import "./modal.css";
import { useGlobalContext } from "../../context/Context";

const Modal = ({ onClick, text }) => {
  const { playAgain } = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal__contents">
        <p>{text}</p>
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
};

export default Modal;
