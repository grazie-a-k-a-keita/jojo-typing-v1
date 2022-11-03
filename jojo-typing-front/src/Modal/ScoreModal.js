import React from "react";
import { Link } from "react-router-dom";

const ScoreModal = () => {
  return (
    <>
      <div tabIndex={1} id="overlay" style={overlay}>
        <div id="modalContent" style={modalContent}>
          <p>SCORE</p>
          <Link to="/">ホームに戻る</Link>
        </div>
      </div>
    </>
  );
};
//css
const modalContent = {
  background: "white",
  padding: "10px",
  borderRadius: "3px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default ScoreModal;
