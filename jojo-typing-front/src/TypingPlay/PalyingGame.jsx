import React from "react";
import { useState } from "react";
import "../css/PlayingGame.css";

// DBから取得する値（仮）
const db = [
  {
    part: 3,
    text: "my demon blade wants the blood of its 340th victims and you all look like",
  },
  {
    part: 3,
    text: "didnt expect this but damn youre good",
  },
  {
    part: 3,
    text: "i keep telling you i dont have any weaknesses",
  },
  {
    part: 3,
    text: "that i have a stand that shoots and a sword",
  },
  {
    part: 3,
    text: "i win your valiant hero finally bit the dust",
  },
  {
    part: 3,
    text: "are you gonna do the ora ora things",
  },
];
//
const PalyingGame = (props) => {
  // タイピングの処理 + "Escape"で強制終了
  let ProblemText = db.map((value) => {
    let text = "";
    if (value.part === 3) {
      text = value.text;
    }
    return text;
  });
  const rnd = Math.floor(Math.random() * ProblemText.length);
  const [correctText, setCorrectText] = useState("");
  const [checkText, setCheckText] = useState(ProblemText[rnd].split(""));
  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      props.setSubHeading(props.subHeading);
      props.setShowModal(true);
      props.setShowGame(false);
      clearTimeout();
    } else if (event.key === checkText[0]) {
      setCorrectText(correctText + event.key);
      setCheckText(checkText.splice(1));
    }
  };
  // 空白時の処理
  if (checkText[0] === " ") {
    setCorrectText(correctText + " ");
    setCheckText(checkText.splice(1));
  }
  if (checkText.length === 0) {
    setCorrectText("");
    setCheckText(ProblemText[rnd].split(""));
  }
  //
  return (
    <>
      <p id="checkText">
        <span id="correctText">{correctText}</span>
        {checkText}
      </p>
    </>
  );
};

export default PalyingGame;
