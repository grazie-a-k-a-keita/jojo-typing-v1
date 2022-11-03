import React from "react";
import { Link } from "react-router-dom";

const PlayModal = (props) => {
  window.document.onkeydown = function (event) {
    if (event.key === "Enter" || "Space") {
      props.setShowModal(false);
      setTimeout(() => {
        gameEnd();
      }, 3 * 1000);
    }
  };
  const gameEnd = () => {
    props.setSubHeading("SCORE");
    props.setShowModal(true);
  };
  return (
    <>
      {props.showFlag ? (
        <div tabIndex={1} id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <p>{props.subHeading}</p>

            <Link to="/">ホームに戻る</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
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

export default PlayModal;
