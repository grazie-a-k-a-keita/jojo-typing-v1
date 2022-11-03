import React from "react";
import "../css/TypingPlay.css";

const TypingPlay = (props) => {
  //
  return (
    <>
      {props.showGame ? (
        <>
          <div id="game">タイピングゲーム部分</div>
          <div className="timeGauge"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
