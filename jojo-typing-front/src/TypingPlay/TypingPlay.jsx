import React from "react";
import PalyingGame from "./PalyingGame";
import "../css/TypingPlay.css";

const TypingPlay = (props) => {
  //
  return (
    <>
      {props.showGame ? (
        <>
          <PalyingGame
            showFlag={props.showModal}
            setShowModal={props.setShowModal}
            subHeading={props.subHeading}
            setSubHeading={props.setSubHeading}
            showGame={props.showGame}
            setShowGame={props.setShowGame}
          />
          <div className="timeGauge"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
