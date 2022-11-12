import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const ButtonBackToHome = () => {
  return (
    <>
      <Link to="/" class="button">
        ホームに戻る
      </Link>
    </>
  );
};

export default ButtonBackToHome;
