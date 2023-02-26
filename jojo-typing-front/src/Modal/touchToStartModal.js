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
        <div id="overlay_01">
          <div className="bg-blue-50/90 rounded-xl p-8">
            <p className="flashText text-5xl">Touch To Start</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TouchToStartModal;
