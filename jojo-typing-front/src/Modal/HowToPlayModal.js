import React from "react";
import SubHeading from "../Components/SubHeading";
import "../css/button.css";

const HowToPlayModal = (props) => {
  //
  const closeModal = () => {
    props.setShowModal(false);
  };
  //
  return (
    <>
      {props.showFlag ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <SubHeading subHeading={props.subHeading} />
            <button onClick={closeModal} class="button">
              戻る
            </button>
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

export default HowToPlayModal;
