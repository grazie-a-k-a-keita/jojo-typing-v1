import React from "react";
import useSound from "use-sound";
import SubHeading from "../Components/subHeading";
import ButtonBackToHome from "../Components/button-BackToHome";
import "../css/modal.css";
import "../css/flashText.css";

const PlayModal = (props) => {
  // sound
  const [playOnkeyDown] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/jotaro_oraora.mp3`
  );
  // ゲームをスタートする処理
  window.document.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
      if (props.se === true) {
        playOnkeyDown();
      }
      props.setShowModal(false);
      props.setShowGame(true);
      props.start();
    }
  };
  // HTML
  return (
    <>
      {props.showFlag ? (
        <div tabIndex={1} id="overlay_01">
          <div id="modalContent_01">
            <SubHeading subHeading={props.partOfNumber + "部コース"} />
            <div className="p-8">
              <p className="text-center font-semibold">
                【Space か Enter キーを押すとスタートします】
              </p>
            </div>
            <div className="p-8">
              <p className="flashText text-2xl">
                Press "Space" or "Enter" key to start!!
              </p>
            </div>
            <div className="p-8">
              <p className="text-center">
                ※ゲーム中はescキーでホーム画面に戻ります。
              </p>
            </div>
            <div className="p-8">
              <ButtonBackToHome
                se={props.se}
                setCorrectCount={props.setCorrectCount}
                setMissCount={props.setMissCount}
              />
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
