import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import "../css/button.css";

const ButtonBackToHome = (props) => {
  // sound
  const [playButtonHover] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonHover.mp3`,
    { interrupt: true }
  );
  const [playButtonClickBack] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonClickBack.mp3`,
    { interrupt: true }
  );
  //
  const onClick = () => {
    playButtonClickBack();
    props.setCorrectCount(0);
    props.setMissCount(0);
  };
  //
  return (
    <>
      <Link
        to="/"
        className="button"
        onClick={() => onClick()}
        onMouseEnter={() => playButtonHover()}
      >
        ホームに戻る
      </Link>
    </>
  );
};

export default ButtonBackToHome;
