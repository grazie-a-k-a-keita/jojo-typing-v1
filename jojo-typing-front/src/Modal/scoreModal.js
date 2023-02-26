import React from "react";
import SubHeading from "../Components/subHeading";
import ButtonBackToHome from "../Components/button-BackToHome";
import rankdata from "../data/rankdata.json";
import "../css/modal.css";

const ScoreModal = (props) => {
  // タイピング速度
  const typeSpeed = props.correctCount / 60;
  const typeSpeedContext = typeSpeed.toFixed(2);
  // ランク
  let rankTmp;
  if (1 >= typeSpeedContext) {
    rankTmp = 6;
  } else if (1.33 >= typeSpeedContext) {
    rankTmp = 7;
  } else if (1.66 >= typeSpeedContext) {
    rankTmp = 8;
  } else if (2 >= typeSpeedContext) {
    rankTmp = 9;
  } else if (2.33 >= typeSpeedContext) {
    rankTmp = 10;
  } else if (2.66 >= typeSpeedContext) {
    rankTmp = 11;
  } else if (3 >= typeSpeedContext) {
    rankTmp = 12;
  } else if (3.33 >= typeSpeedContext) {
    rankTmp = 13;
  } else if (3.66 >= typeSpeedContext) {
    rankTmp = 14;
  } else if (4 >= typeSpeedContext) {
    rankTmp = 15;
  } else if (4.33 >= typeSpeedContext) {
    rankTmp = 16;
  } else if (4.66 >= typeSpeedContext) {
    rankTmp = 17;
  } else if (5 >= typeSpeedContext) {
    rankTmp = 18;
  } else if (5.33 >= typeSpeedContext) {
    rankTmp = 19;
  } else if (5.66 >= typeSpeedContext) {
    rankTmp = 20;
  } else if (6 >= typeSpeedContext) {
    rankTmp = 21;
  } else if (6.33 >= typeSpeedContext) {
    rankTmp = 22;
  } else if (6.66 >= typeSpeedContext) {
    rankTmp = 23;
  } else if (7 >= typeSpeedContext) {
    rankTmp = 24;
  } else {
    rankTmp = 25;
  }
  rankTmp = rankTmp - Math.floor(props.missCount / 10);
  const rank = rankdata.rankdata.filter(function (value) {
    if (0 > rankTmp) rankTmp = 0;
    return value.score === rankTmp;
  });

  // ランキング
  // DBが実装されたら追加 ↓↓
  // const ranking = "18";

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
                <span>計測中...</span>
              </p>
              {/* DBが実装されたら追加 ↓↓ */}
              {/* <p className="text-center font-semibold">
                <span className="text-2xl">{ranking}</span> 位
              </p> */}
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">ランク</p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{rank[0].rank}</span>
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
