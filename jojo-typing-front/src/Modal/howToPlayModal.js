import React from "react";
import useSound from "use-sound";
import SubHeading from "../Components/subHeading";
import "../css/button.css";
import "../css/modal.css";

const HowToPlayModal = (props) => {
  // sound
  const [playButtonHover] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonHover.mp3`,
    { interrupt: true }
  );
  const [playButtonClickBack] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonClickBack.mp3`,
    { interrupt: true }
  );
  // ボタンのsound関連の処理
  const buttonHover = () => {
    if (props.se === true) {
      playButtonHover();
    }
  };
  const buttonClick = () => {
    props.setShowModal(false);
    if (props.se === true) {
      playButtonClickBack();
    }
  };
  // HTML
  return (
    <>
      {props.showFlag ? (
        <div id="overlay_02">
          <div id="modalContent_02">
            <SubHeading subHeading={props.subHeading} />
            <div className="p-8">
              <p className="font-bold text-sky-700 text-center">はじめに</p>
              <div className="p-4 m-4 border-y-2 border-sky-700/50">
                <p className="m-2">
                  ・このサイトはアニメ『ジョジョの奇妙な冒険』モチーフにした、タイピングゲームです。
                </p>
                <p className="m-2">
                  ・タイピングの練習に役立ててみてください!!
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="font-bold text-sky-700 text-center">注意事項</p>
              <div className="p-4 m-4 border-y-2 border-sky-700/50">
                <p className="m-2">・正しい文字を入力すると先に進めます。</p>
                <p className="m-2">
                  ・空白(Spaceキー)は入力する必要はありません。
                </p>
                <p className="m-2">・制限時間を過ぎると自動的に終了します。</p>
                <p className="m-2">
                  ・Escキーを押すと、最初からやり直すことができます。
                </p>
              </div>
            </div>
            <div className="p-8">
              <button
                className="button_small"
                onMouseEnter={() => buttonHover()}
                onClick={buttonClick}
              >
                戻る
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HowToPlayModal;
