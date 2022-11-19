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

            <div class="p-8">
              <p class="text-center font-semibold">
                【Space か Enter キーを押すとスタートします】
              </p>
            </div>
            <div class="p-8">
              <p class="flashText">Press "Space" or "Enter" key to start!!</p>
            </div>
            <div class="p-8">
              <p class="text-center">
                ※ゲーム中はescキーでホーム画面に戻ります。
              </p>
            </div>

            <div class="p-8">
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
