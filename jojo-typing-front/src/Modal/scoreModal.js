import React from "react";
import SubHeading from "../Components/subHeading";
import ButtonBackToHome from "../Components/button-BackToHome";
import "../css/modal.css";

const ScoreModal = (props) => {
  // SCOREデータ
  const rank = "S";
  const ranking = "18位";
  // タイピング速度
  const typeSpeed = props.correctCount / 60;
  const typeSpeedContext = typeSpeed.toFixed(2) + "/s";
  // HTML
  return (
    <>
      <div tabIndex={1} id="overlay_01">
        <div id="modalContent_01">
          <SubHeading subHeading="SCORE" />

          <div className="p-8">
            <p className="text-center font-semibold">
              ランキング：<span>{ranking}</span>
            </p>
          </div>
          <div className="p-8">
            <p className="text-center font-semibold">
              ランク：<span>{rank}</span>
            </p>
          </div>
          <div className="p-8">
            <p className="text-center font-semibold">
              タイピング速度：<span>{typeSpeedContext}</span>
            </p>
          </div>
          <div className="p-8">
            <p className="text-center font-semibold">
              ミスタイプ数：<span>{props.missCount}</span>
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
    </>
  );
};

export default ScoreModal;
