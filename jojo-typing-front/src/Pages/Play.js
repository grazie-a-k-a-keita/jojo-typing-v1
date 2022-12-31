import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypingGame from "../TypingPlay/TypingPlay";
import PlayModal from "../Modal/PlayModal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Play = (props) => {
  // Pathから部数を取得
  let { pathname } = useLocation();
  const partOfNumber = pathname.replace("/play", "");
  // State, Ref
  const [subHeading] = useState(partOfNumber + "部コース");
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  // タイマー関連
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
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  // HTML
  return (
    <>
      {/* モダール部分 */}
      <PlayModal
        se={props.se}
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setShowGame={setShowGame}
        start={() => start()}
        setCorrectCount={props.setCorrectCount}
        setMissCount={props.setMissCount}
      />

      {/* プレイ画面部分 */}
      <Header />
      <div className="w-3/5 mx-auto">
        <TypingGame
          typeSound={props.typeSound}
          missSound={props.missSound}
          correctCount={props.correctCount}
          setCorrectCount={props.setCorrectCount}
          missCount={props.missCount}
          setMissCount={props.setMissCount}
          setShowModal={setShowModal}
          showGame={showGame}
          setShowGame={setShowGame}
          setCount={setCount}
          stop={() => stop()}
        />
      </div>
      <Footer />
    </>
  );
};

export default Play;
