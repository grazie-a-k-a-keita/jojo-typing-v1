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
            <p className="flashText text-5xl p-4">Touch To Start</p>
            <p className="text-center px-4 pt-4">※注意</p>
            <p className="text-center px-4 pt-4">
              <span className="font-medium">「JOJOタイピング」</span>
              は効果音や音楽が流れます。
            </p>
            <p className="text-center p-4">
              無音で楽しみたい方は、<span className="font-medium">[設定]</span>
              で音の有無を選択してください。
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TouchToStartModal;
