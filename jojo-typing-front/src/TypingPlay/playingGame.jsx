import React from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import "../css/playingGame.css";

// DBから取得する値（予定）
const db = [
  {
    part: "1",
    text: "ジョジョの奇妙な冒険 1部",
  },
  {
    part: "2",
    text: "ジョジョの奇妙な冒険 2部",
  },
  {
    part: "3",
    text: "my demon blade wants the blood of its 340th victims and you all look like",
  },
  {
    part: "3",
    text: "didnt expect this but damn youre good",
  },
  {
    part: "3",
    text: "i keep telling you i dont have any weaknesses",
  },
  {
    part: "3",
    text: "that i have a stand that shoots and a sword",
  },
  {
    part: "3",
    text: "i win your valiant hero finally bit the dust",
  },
  {
    part: "3",
    text: "are you gonna do the ora ora things",
  },
  {
    part: "4",
    text: "ジョジョの奇妙な冒険 4部",
  },
  {
    part: "5",
    text: "ジョジョの奇妙な冒険 5部",
  },
];
////////////////////////////////////////////////////////////////////

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
  var ProblemText = db
    .filter(function (value) {
      return value.part === props.partOfNumber;
    })
    .map(function (value) {
      return value.text;
    });
  const rnd = Math.floor(Math.random() * ProblemText.length);
  const [correctText, setCorrectText] = useState("");
  const [checkText, setCheckText] = useState(ProblemText[rnd].split(""));
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
          props.setMissCount(props.missCount + 1);
          if (props.missSound === true) {
            // sound on/off
            missTypeSound();
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
      setCorrectText("");
      setCheckText(ProblemText[rnd].split(""));
    }
  }, [checkText.length, rnd, ProblemText]);
  // HTML
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

export default PlayingGame;
