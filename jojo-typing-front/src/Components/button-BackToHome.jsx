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
  // ボタンのsound関連の処理
  const buttonHover = () => {
    if (props.se === true) {
      playButtonHover();
    }
  };
  const onClick = () => {
    if (props.se === true) {
      playButtonClickBack();
    }
    props.setCorrectCount(0);
    props.setMissCount(0);
  };
  // HTML
  return (
    <>
      <Link
        to="/"
        className="button_small"
        onClick={() => onClick()}
        onMouseEnter={() => buttonHover()}
      >
        ホームに戻る
      </Link>
    </>
  );
};

export default ButtonBackToHome;
