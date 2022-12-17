import React from "react";
import SubHeading from "../Components/SubHeading";
import ButtonBackToHome from "../Components/Button-BackToHome";
import "../css/modal.css";
import "../css/flashText.css";

const PlayModal = (props) => {
  window.document.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
      props.setShowModal(false);
      props.setShowGame(true);
      props.start();
    }
  };
  return (
    <>
      {props.showFlag ? (
        <div tabIndex={1} id="overlay">
          <div id="modalContent">
            <SubHeading subHeading={props.subHeading} />

            <div className="p-8">
              <p className="text-center font-semibold">
                【Space か Enter キーを押すとスタートします】
              </p>
            </div>
            <div className="p-8">
              <p className="flashText">
                Press "Space" or "Enter" key to start!!
              </p>
            </div>
            <div className="p-8">
              <p className="text-center">
                ※ゲーム中はescキーでホーム画面に戻ります。
              </p>
            </div>

            <div className="p-8">
              <ButtonBackToHome />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PlayModal;
