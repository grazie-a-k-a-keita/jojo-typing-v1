import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import Header from "../Components/header";
import MainTitle from "../Components/mainTitle";
import Footer from "../Components/footer";
import HowToPlayModal from "../Modal/howToPlayModal";
import SettingModal from "../Modal/settingModal";
import TouchToStartModal from "../Modal/touchToStartModal";
import "../css/button.css";

const Home = (props) => {
  // モーダルの状態管理
  const [howToPlayModal, setShowHowToPlayModal] = useState(false);
  const [settingModal, setShowSettingModal] = useState(false);
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
  const howToPlayClick = () => {
    setShowHowToPlayModal(true);
    if (props.se === true) {
      playButtonClick();
    }
  };
  const settingClick = () => {
    setShowSettingModal(true);
    if (props.se === true) {
      playButtonClick();
    }
  };
  // HTML
  return (
    <>
      {/* ホーム画面部分 */}
      <Header />
      <div id="main" className="w-3/5 mx-auto pt-32">
        <MainTitle />
        <div className="flex justify-center py-16">
          <Link
            to="/play1"
            className="button"
            onMouseEnter={() => buttonHover()}
            onClick={() => buttonClick()}
          >
            1部
          </Link>
          <Link
            to="/play2"
            className="button"
            onMouseEnter={() => buttonHover()}
            onClick={() => buttonClick()}
          >
            2部
          </Link>
          <Link
            to="play3"
            className="button"
            onMouseEnter={() => buttonHover()}
            onClick={() => buttonClick()}
          >
            3部
          </Link>
          <Link
            to="/play4"
            className="button"
            onMouseEnter={() => buttonHover()}
            onClick={() => buttonClick()}
          >
            4部
          </Link>
          <Link
            to="/play5"
            className="button"
            onMouseEnter={() => buttonHover()}
            onClick={() => buttonClick()}
          >
            5部
          </Link>
        </div>
        <div className="flex justify-center py-16">
          <button
            className="mr-8"
            onMouseEnter={() => buttonHover()}
            onClick={howToPlayClick}
          >
            <span className="button">遊び方</span>
          </button>
          <button
            className="ml-8"
            onMouseEnter={() => buttonHover()}
            onClick={settingClick}
          >
            <span className="button">設定</span>
          </button>
        </div>
      </div>
      <Footer />

      {/* モダール部分 */}
      <HowToPlayModal
        se={props.se}
        showFlag={howToPlayModal}
        setShowModal={setShowHowToPlayModal}
        subHeading="遊び方"
      />
      <SettingModal
        bgm={props.bgm}
        setBgm={props.setBgm}
        se={props.se}
        setSe={props.setSe}
        typeSound={props.typeSound}
        setTypeSound={props.setTypeSound}
        missSound={props.missSound}
        setMissSound={props.setMissSound}
        showFlag={settingModal}
        setShowModal={setShowSettingModal}
        subHeading="設定"
      />
      <TouchToStartModal
        showFlag={props.showFlag}
        setShowModal={props.setShowModal}
      />
    </>
  );
};

export default Home;
