import React from "react";
import PalyingGame from "./PalyingGame";
import TimeGauge from "./TimeGauge";

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
          <TimeGauge />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
