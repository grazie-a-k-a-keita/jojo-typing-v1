import React from "react";
import SubHeading from "../Components/SubHeading";
import "../css/button.css";
import "../css/modal.css";

const SettingModal = (props) => {
  //
  const closeModal = () => {
    props.setShowModal(false);
  };
  const onBgm = () => {
    props.setBgm(true);
  };
  const offBgm = () => {
    props.setBgm(false);
  };
  const onSe = () => {
    props.setSe(true);
  };
  const offSe = () => {
    props.setSe(false);
  };
  const onType = () => {
    props.setTypeSound(true);
  };
  const offType = () => {
    props.setTypeSound(false);
  };
  const onMiss = () => {
    props.setMissSound(true);
  };
  const offMiss = () => {
    props.setMissSound(false);
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
              <input
                type="checkbox"
                id="onBGM"
                checked={props.bgm}
                readOnly
                onClick={onBgm}
              />
              <label htmlFor="onBGM" className="pl-2">
                あり
              </label>
              <input
                type="checkbox"
                id="offBGM"
                className="ml-8"
                checked={!props.bgm}
                readOnly
                onClick={offBgm}
              />
              <label htmlFor="offBGM" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">効果音</p>
              <input
                type="checkbox"
                id="onSE"
                checked={props.se}
                readOnly
                onClick={onSe}
              />
              <label htmlFor="onSE" className="pl-2">
                あり
              </label>
              <input
                type="checkbox"
                id="offSE"
                className="ml-8"
                checked={!props.se}
                readOnly
                onClick={offSe}
              />
              <label htmlFor="offSE" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">タイプ音</p>
              <input
                type="checkbox"
                id="onType"
                checked={props.typeSound}
                readOnly
                onClick={onType}
              />
              <label htmlFor="onType" className="pl-2">
                あり
              </label>
              <input
                type="checkbox"
                id="offType"
                className="ml-8"
                checked={!props.typeSound}
                readOnly
                onClick={offType}
              />
              <label htmlFor="offType" className="pl-2">
                なし
              </label>
            </div>

            <div className="pl-8 pb-8">
              <p className="font-bold text-sky-700 mb-2">ミス音</p>
              <input
                type="checkbox"
                id="onMiss"
                checked={props.missSound}
                readOnly
                onClick={onMiss}
              />
              <label htmlFor="onMiss" className="pl-2">
                あり
              </label>
              <input
                type="checkbox"
                id="offMiss"
                className="ml-8"
                checked={!props.missSound}
                readOnly
                onClick={offMiss}
              />
              <label htmlFor="offMiss" className="pl-2">
                なし
              </label>
            </div>

            <div className="p-8">
              <button onClick={closeModal} className="button">
                OK
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
