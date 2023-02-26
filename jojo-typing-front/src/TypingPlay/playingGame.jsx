import React from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import "../css/playingGame.css";
import testdata from "../data/testdata.json";

const PlayingGame = (props) => {
  // sound
  const [typeSound] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/typeSound.mp3`,
    { interrupt: false }
  );
  const [missTypeSound] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/missTypeSound.mp3`,
    { interrupt: true }
  );
  // 問題文生成
  var ProblemText = testdata.testdata.filter(function (value) {
    return value.part === props.partOfNumber;
  });
  const rnd = Math.floor(Math.random() * ProblemText.length);
  const [japaneseQuestionText, setJapaneseQuestionText] = useState(
    ProblemText[rnd].japanese
  );
  const [correctText, setCorrectText] = useState("");
  const [checkText, setCheckText] = useState(ProblemText[rnd].text.split(""));
  // タイピング処理
  useEffect(() => {
    document.onkeydown = function (event) {
      if (event.key === "Escape") {
        // "Escape"キーの処理（タイマー、タイプカウントのリセット）
        props.setShowModal(true);
        props.setShowGame(false);
        props.stoped();
        props.setCount(0);
        props.setCorrectCount(0);
        props.setMissCount(0);
      } else if (event.key === checkText[0]) {
        // 正解した時の処理
        if (props.count !== 60) {
          setCorrectText(correctText + event.key);
          setCheckText(checkText.splice(1));
          props.setCorrectCount(props.correctCount + 1);
          if (props.typeSound === true) {
            // sound on/off
            typeSound();
          }
        }
      } else {
        // ミスした時の処理
        if (props.count !== 60) {
          if (event.key !== "Shift") {
            props.setMissCount(props.missCount + 1);
            if (props.missSound === true) {
              // sound on/off
              missTypeSound();
            }
          }
        }
      }
    };
  });
  // 空白時の処理
  useEffect(() => {
    if (checkText[0] === " ") {
      setCorrectText(correctText + " ");
      setCheckText(checkText.splice(1));
    }
  }, [checkText, correctText]);
  // 問題文が終了したときの処理
  useEffect(() => {
    if (checkText.length === 0) {
      setJapaneseQuestionText(ProblemText[rnd].japanese);
      setCorrectText("");
      setCheckText(ProblemText[rnd].text.split(""));
    }
  }, [checkText.length, rnd, ProblemText]);
  // HTML
  return (
    <>
      <div className="gameBox">
        <p id="japaneseQuestionText">{japaneseQuestionText}</p>
        <p id="checkText" className="break-normal">
          <span id="correctText">{correctText}</span>
          {checkText}
        </p>
      </div>
    </>
  );
};

export default PlayingGame;
