import React from "react";
import ScoreModal from "../Modal/scoreModal";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Score = (props) => {
  return (
    <>
      <Header />
      <ScoreModal
        se={props.se}
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
