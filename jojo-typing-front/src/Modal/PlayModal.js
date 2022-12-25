import React from "react";
import useSound from "use-sound";
import SubHeading from "../Components/SubHeading";
import ButtonBackToHome from "../Components/Button-BackToHome";
import "../css/modal.css";
import "../css/flashText.css";

const PlayModal = (props) => {
  // sound
  const [playOnkeyDown] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/承太郎 オラオラ.wav`
  );
  //
  window.document.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
      playOnkeyDown();
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
              <ButtonBackToHome
                correctCount={props.correctCount}
                setCorrectCount={props.setCorrectCount}
                missCount={props.missCount}
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
