import React from "react";
import PlayingGame from "./playingGame";
import TimeGauge from "./timeGauge";

const TypingPlay = (props) => {
  return (
    <>
      {props.showGame ? (
        <>
          <PlayingGame
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
