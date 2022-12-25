import React from "react";
import { useState } from "react";
import useSound from "use-sound";
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
  //sound
  const [typeSound] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/typeSound.mp3`,
    { interrupt: false }
  );
  const [missTypeSound] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/missTypeSound.mp3`,
    { interrupt: true }
  );
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
      props.stop();
      props.setCount(0);
    } else if (event.key === checkText[0]) {
      setCorrectText(correctText + event.key);
      setCheckText(checkText.splice(1));
      props.setCorrectCount(props.correctCount + 1);
      typeSound();
    } else {
      // ミス数カウント
      props.setMissCount(props.missCount + 1);
      missTypeSound();
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
      <div className="gameBox">
        <p id="checkText" className="break-normal">
          <span id="correctText">{correctText}</span>
          {checkText}
        </p>
      </div>
    </>
  );
};

export default PalyingGame;
