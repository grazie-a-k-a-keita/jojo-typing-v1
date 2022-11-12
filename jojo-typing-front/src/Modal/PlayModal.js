import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubHeading from "../Components/SubHeading";
import ButtonBackToHome from "../Components/Button-BackToHome";
import "../css/modal.css";

const PlayModal = (props) => {
  //
  const timeOut = setTimeout(() => {
    gameEnd();
    // 〇〇秒 * 1000
  }, 60 * 1000);
  useEffect(() => {
    return () => {
      clearTimeout(timeOut);
    };
  });
  // Enter or Space でゲーム開始
  window.document.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
      props.setShowModal(false);
      props.setShowGame(true);
      setTimeout(timeOut);
    }
  };
  // ゲーム終了時の処理（SCORE画面に遷移）
  const navigate = useNavigate();
  const gameEnd = () => {
    navigate("/score");
    clearTimeout(timeOut);
  };
  //
  return (
    <>
      {props.showFlag ? (
        <div tabIndex={1} id="overlay">
          <div id="modalContent">
            <SubHeading subHeading={props.subHeading} />
            <ButtonBackToHome />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PlayModal;
