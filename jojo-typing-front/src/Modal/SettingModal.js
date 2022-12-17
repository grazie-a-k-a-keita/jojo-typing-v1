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

            <div class="p-8">
              <p class="font-bold text-sky-700 mb-2">BGM</p>
              <input type="checkbox" id="onBGM" />
              <label for="onBGM" class="pl-2">
                あり
              </label>
              <input type="checkbox" id="offBGM" class="ml-8" />
              <label for="offBGM" class="pl-2">
                なし
              </label>
            </div>

            <div class="pl-8 pb-8">
              <p class="font-bold text-sky-700 mb-2">効果音</p>
              <input type="checkbox" id="onSE" />
              <label for="onSE" class="pl-2">
                あり
              </label>
              <input type="checkbox" id="offSE" class="ml-8" />
              <label for="offSE" class="pl-2">
                なし
              </label>
            </div>

            <div class="pl-8 pb-8">
              <p class="font-bold text-sky-700 mb-2">タイプ音</p>
              <input type="checkbox" id="onType" />
              <label for="onType" class="pl-2">
                あり
              </label>
              <input type="checkbox" id="offType" class="ml-8" />
              <label for="offType" class="pl-2">
                なし
              </label>
            </div>

            <div class="pl-8 pb-8">
              <p class="font-bold text-sky-700 mb-2">ミス音</p>
              <input type="checkbox" id="onMiss" />
              <label for="onMiss" class="pl-2">
                あり
              </label>
              <input type="checkbox" id="offMiss" class="ml-8" />
              <label for="offMiss" class="pl-2">
                なし
              </label>
            </div>

            <div class=" flex justify-center p-8">
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
