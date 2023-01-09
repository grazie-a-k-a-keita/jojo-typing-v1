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
            partOfNumber={props.partOfNumber}
            setShowModal={props.setShowModal}
            setShowGame={props.setShowGame}
            count={props.count}
            setCount={props.setCount}
            stoped={() => props.stoped()}
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
