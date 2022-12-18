import React from "react";
import ScoreModal from "../Modal/ScoreModal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Score = (props) => {
  return (
    <>
      <Header />
      <ScoreModal
        correctCount={props.correctCount}
        setCorrectCount={props.setCorrectCount}
        missCount={props.missCount}
        setMissCount={props.setMissCount}
      />
      <Footer />
    </>
  );
};

export default Score;
