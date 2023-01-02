import React from "react";
import PalyingGame from "./PalyingGame";
import TimeGauge from "./TimeGauge";

const TypingPlay = (props) => {
  return (
    <>
      {props.showGame ? (
        <>
          <PalyingGame
            typeSound={props.typeSound}
            missSound={props.missSound}
            correctCount={props.correctCount}
            setCorrectCount={props.setCorrectCount}
            missCount={props.missCount}
            setMissCount={props.setMissCount}
            setShowModal={props.setShowModal}
            setShowGame={props.setShowGame}
            setCount={props.setCount}
            stop={() => props.stop()}
          />
          <TimeGauge />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
