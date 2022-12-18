import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const ButtonBackToHome = (props) => {
  const resetScore = () => {
    props.setCorrectCount(0);
    props.setMissCount(0);
  };
  return (
    <>
      <Link to="/" className="button" onClick={resetScore}>
        ホームに戻る
      </Link>
    </>
  );
};

export default ButtonBackToHome;
