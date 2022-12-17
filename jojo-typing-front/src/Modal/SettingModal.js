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

            <div className="p-8">
              <p className="font-bold text-sky-700 mb-2">BGM</p>
              <input type="checkbox" id="onBGM" />
              <label for="onBGM" className="pl-2">
                あり
              </label>
              <input type="checkbox" id="offBGM" className="ml-8" />
              <label for="offBGM" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">効果音</p>
              <input type="checkbox" id="onSE" />
              <label for="onSE" className="pl-2">
                あり
              </label>
              <input type="checkbox" id="offSE" className="ml-8" />
              <label for="offSE" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">タイプ音</p>
              <input type="checkbox" id="onType" />
              <label for="onType" className="pl-2">
                あり
              </label>
              <input type="checkbox" id="offType" className="ml-8" />
              <label for="offType" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">ミス音</p>
              <input type="checkbox" id="onMiss" />
              <label for="onMiss" className="pl-2">
                あり
              </label>
              <input type="checkbox" id="offMiss" className="ml-8" />
              <label for="offMiss" className="pl-2">
                なし
              </label>
            </div>

            <div className=" flex justify-center p-8">
              <button onClick={closeModal} className="button">
                OK
              </button>
              <button onClick={closeModal} className="button">
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
