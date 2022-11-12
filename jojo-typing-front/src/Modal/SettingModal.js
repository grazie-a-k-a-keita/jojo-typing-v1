import React from "react";
import SubHeading from "../Components/SubHeading";
import "../css/button.css";
import "../css/modal.css";

const SettingModal = (props) => {
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
            <div class="flex justify-center">
              <button onClick={closeModal} class="button">
                OK
              </button>
              <button onClick={closeModal} class="button">
                戻る
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingModal;
