import React from "react";
import "../css/flashText.css";

const TouchToStartModal = (props) => {
  //
  const closeModal = () => {
    props.setShowModal(false);
  };
  window.document.onclick = function (e) {
    closeModal();
  };
  //
  return (
    <>
      {props.showFlag ? (
        <div id="overlay">
          <p className="flashText text-5xl">Touch To Start</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TouchToStartModal;
