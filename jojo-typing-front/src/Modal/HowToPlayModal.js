import React from "react";
import useSound from "use-sound";
import SubHeading from "../Components/SubHeading";
import "../css/button.css";
import "../css/modal.css";

const HowToPlayModal = (props) => {
  // sound
  const [playButtonClickBack] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonClickBack.mp3`,
    { interrupt: true }
  );
  //
  const buttonClick = () => {
    props.setShowModal(false);
    playButtonClickBack();
  };
  //
  return (
    <>
      {props.showFlag ? (
        <div id="overlay">
          <div id="modalContent">
            <SubHeading subHeading={props.subHeading} />

            <div className="p-8">
              <p className="font-bold text-sky-700">はじめに</p>
              <ul className="list-disc">
                <li>
                  このサイトはアニメ『ジョジョの奇妙な冒険』モチーフにした、タイピングゲームです。
                </li>
                <li>タイピングの練習に役立ててみてください!!</li>
              </ul>
            </div>
            <div className="p-8">
              <p className="font-bold text-sky-700">注意事項</p>
              <ul className="list-disc">
                <li>正しい文字を入力すると先に進めます。</li>
                <li>空白(Spaceキー)は入力する必要はありません。</li>
                <li>制限時間を過ぎると自動的に終了します。</li>
                <li>Escキーを押すと、最初からやり直すことができます。</li>
              </ul>
            </div>

            <div className="p-8">
              <button onClick={buttonClick} className="button">
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
