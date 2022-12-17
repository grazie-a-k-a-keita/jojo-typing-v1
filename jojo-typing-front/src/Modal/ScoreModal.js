import React from "react";
import SubHeading from "../Components/SubHeading";
import ButtonBackToHome from "../Components/Button-BackToHome";
import "../css/modal.css";

const ScoreModal = () => {
  // SCOREデータ
  const rank = "S";
  const ranking = "18位";
  const typingSpeed = "5.1/s";
  const missTouch = "4回";

  return (
    <>
      <div tabIndex={1} id="overlay">
        <div id="modalContent">
          <SubHeading subHeading="SCORE" />

          <div class="p-8">
            <p class="text-center font-semibold">
              ランキング：<span>{ranking}</span>
            </p>
          </div>
          <div class="p-8">
            <p class="text-center font-semibold">
              ランク：<span>{rank}</span>
            </p>
          </div>
          <div class="p-8">
            <p class="text-center font-semibold">
              タイピング速度：<span>{typingSpeed}</span>
            </p>
          </div>
          <div class="p-8">
            <p class="text-center font-semibold">
              ミスタイプ数：<span>{missTouch}</span>
            </p>
          </div>

          <div class="p-8">
            <ButtonBackToHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;
