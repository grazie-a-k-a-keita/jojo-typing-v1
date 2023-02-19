import React from "react";
import useSound from "use-sound";
import SubHeading from "../Components/subHeading";
import "../css/button.css";
import "../css/modal.css";

const SettingModal = (props) => {
  // sound
  const [playButtonHover] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonHover.mp3`,
    { interrupt: true }
  );
  const [playButtonClick] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonClick.mp3`,
    { interrupt: true }
  );
  // ボタンのsound関連の処理
  const buttonHover = () => {
    if (props.se === true) {
      playButtonHover();
    }
  };
  const buttonClick = () => {
    props.setShowModal(false);
    if (props.se === true) {
      playButtonClick();
    }
  };
  // soundの状態管理を変更する処理
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
  // HTML
  return (
    <>
      {props.showFlag ? (
        <div id="overlay_02">
          <div id="modalContent_02">
            <SubHeading subHeading={props.subHeading} />
            <div className="p-8">
              <div className="p-4 m-4 border-b-2 border-sky-700/50">
                <p className="font-bold text-sky-700 text-center mb-2">BGM</p>
                <div className="text-center">
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
              </div>
            </div>
            <div className="px-8 pb-8">
              <div className="p-4 m-4 border-b-2 border-sky-700/50">
                <p className="font-bold text-sky-700 text-center mb-2">
                  効果音
                </p>
                <div className="text-center">
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
              </div>
            </div>
            <div className="px-8 pb-8">
              <div className="p-4 m-4 border-b-2 border-sky-700/50">
                <p className="font-bold text-sky-700 text-center mb-2">
                  タイプ音
                </p>
                <div className="text-center">
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
              </div>
            </div>
            <div className="px-8 pb-8">
              <div className="p-4 m-4 border-b-2 border-sky-700/50">
                <p className="font-bold text-sky-700 text-center mb-2">
                  ミス音
                </p>
                <div className="text-center">
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
              </div>
            </div>
            <div className="p-8">
              <button
                className="button_small"
                onMouseEnter={() => buttonHover()}
                onClick={buttonClick}
              >
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
