import React from "react";
import SubHeading from "../Components/SubHeading";
import ButtonBackToHome from "../Components/Button-BackToHome";
import "../css/modal.css";

const ScoreModal = () => {
  return (
    <>
      <div tabIndex={1} id="overlay">
        <div id="modalContent">
          <SubHeading subHeading="SCORE" />

          <div class="p-8">
            <ButtonBackToHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;
