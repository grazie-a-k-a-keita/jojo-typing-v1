import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TypingGame from "../TypingPlay/TypingPlay";
import PlayModal from "../Modal/PlayModal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Play() {
  // Pathから部数を取得
  let { pathname } = useLocation();
  const partOfNumber = pathname.replace("/play", "");
  //
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [subHeading, setSubHeading] = useState(partOfNumber + "部コース");
  //
  return (
    <>
      <PlayModal
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setSubHeading={setSubHeading}
        showGame={showGame}
        setShowGame={setShowGame}
      />
      <Header />
      <TypingGame
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setSubHeading={setSubHeading}
        showGame={showGame}
        setShowGame={setShowGame}
      />
      <Footer />
    </>
  );
}

export default Play;
