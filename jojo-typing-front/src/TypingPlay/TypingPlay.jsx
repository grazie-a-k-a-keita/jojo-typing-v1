import React from "react";
import PalyingGame from "./PalyingGame";
import "../css/TypingPlay.css";

const TypingPlay = (props) => {
  //
  return (
    <>
      {props.showGame ? (
        <>
          <PalyingGame />
          <div className="timeGauge"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
