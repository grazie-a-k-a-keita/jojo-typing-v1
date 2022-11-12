import React from "react";
import SubHeading from "../Components/SubHeading";
import "../css/button.css";
import "../css/modal.css";

const HowToPlayModal = (props) => {
  //
  const closeModal = () => {
    props.setShowModal(false);
  };
  //
  return (
    <>
      {props.showFlag ? (
        <div id="overlay">
          <div id="modalContent">
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

export default HowToPlayModal;
