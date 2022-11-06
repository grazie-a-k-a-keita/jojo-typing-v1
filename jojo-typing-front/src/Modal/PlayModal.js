import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div tabIndex={1} id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <p>{props.subHeading}</p>
            <Link to="/">ホームに戻る</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
//css
const modalContent = {
  background: "white",
  padding: "10px",
  borderRadius: "3px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default PlayModal;
