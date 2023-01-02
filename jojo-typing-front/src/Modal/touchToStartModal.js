import React from "react";
import "../css/flashText.css";

const TouchToStartModal = (props) => {
  // モーダルを閉じる処理
  const closeModal = () => {
    props.setShowModal(false);
  };
  window.document.onclick = function (e) {
    closeModal();
  };
  // HTML
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
