import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypingGame from "../TypingPlay/TypingPlay";
import PlayModal from "../Modal/PlayModal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Play() {
  // Pathから部数を取得
  let { pathname } = useLocation();
  const partOfNumber = pathname.replace("/play", "");
  // State, Ref
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [subHeading, setSubHeading] = useState(partOfNumber + "部コース");
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
  //
  return (
    <>
      <div>count = {count}</div>
      <PlayModal
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setSubHeading={setSubHeading}
        showGame={showGame}
        setShowGame={setShowGame}
        count={count}
        setCount={setCount}
        start={() => start()}
        stop={() => stop()}
      />
      <Header />
      <div class="w-3/5 mx-auto">
        <TypingGame
          showFlag={showModal}
          setShowModal={setShowModal}
          subHeading={subHeading}
          setSubHeading={setSubHeading}
          showGame={showGame}
          setShowGame={setShowGame}
          count={count}
          setCount={setCount}
          stop={() => stop()}
        />
      </div>
      <Footer />
    </>
  );
}

export default Play;
