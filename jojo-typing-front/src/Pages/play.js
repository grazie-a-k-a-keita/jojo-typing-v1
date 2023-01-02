import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSound from "use-sound";
import TypingPlay from "../TypingPlay/typingPlay";
import PlayModal from "../Modal/playModal";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Play = (props) => {
  // Pathから部数を取得
  let { pathname } = useLocation();
  const urlNumber = pathname.replace("/play", "");
  // State, Ref
  const [partOfNumber] = useState(urlNumber);
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  // sound
  const [playBGM3, { stop }] = useSound(
    `${process.env.PUBLIC_URL}/sounds/BGM/BGM_03.mp3`
  );
  // スタート、ストップの処理
  const navigate = useNavigate();
  useEffect(() => {
    if (count === 60) {
      navigate("/score");
    }
  });
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    // パートごとのBGMを選定する処理
    if (props.bgm === true) {
      if (partOfNumber === "3") {
        playBGM3();
      }
    }
  };
  const stoped = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    stop();
  };
  // HTML
  return (
    <>
      {/* モダール部分 */}
      <PlayModal
        se={props.se}
        partOfNumber={partOfNumber}
        showFlag={showModal}
        setShowModal={setShowModal}
        setShowGame={setShowGame}
        start={() => start()}
        setCorrectCount={props.setCorrectCount}
        setMissCount={props.setMissCount}
      />

      {/* プレイ画面部分 */}
      <Header />
      <div className="w-3/5 mx-auto">
        <TypingPlay
          typeSound={props.typeSound}
          missSound={props.missSound}
          correctCount={props.correctCount}
          setCorrectCount={props.setCorrectCount}
          missCount={props.missCount}
          setMissCount={props.setMissCount}
          partOfNumber={partOfNumber}
          setShowModal={setShowModal}
          showGame={showGame}
          setShowGame={setShowGame}
          setCount={setCount}
          stoped={() => stoped()}
        />
      </div>
      <Footer />
    </>
  );
};

export default Play;
