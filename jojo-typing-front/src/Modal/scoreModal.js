import React from "react";
import SubHeading from "../Components/subHeading";
import ButtonBackToHome from "../Components/button-BackToHome";
import "../css/modal.css";

const ScoreModal = (props) => {
  // SCOREデータ
  const rank = "S";
  const ranking = "18";
  // タイピング速度
  const typeSpeed = props.correctCount / 60;
  const typeSpeedContext = typeSpeed.toFixed(2);
  // HTML
  return (
    <>
      <div tabIndex={1} id="overlay_02">
        <div id="modalContent_02">
          <SubHeading subHeading="SCORE" />

          <div className="p-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                ランキング
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{ranking}</span> 位
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">ランク</p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{rank}</span> ランク
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                タイピング速度
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{typeSpeedContext}</span> /s
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                ミスタイプ数
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{props.missCount}</span> 回
              </p>
            </div>
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
    </>
  );
};

export default ScoreModal;
