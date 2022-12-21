import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import Header from "../Components/Header";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import HowToPlayModal from "../Modal/HowToPlayModal";
import SettingModal from "../Modal/SettingModal";
import TouchToStartModal from "../Modal/TouchToStartModal";
import "../css/button.css";

const Home = (props) => {
  // sound
  const [playButtonHover] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonHover.mp3`,
    { interrupt: true }
  );
  const [playButtonClick] = useSound(
    `${process.env.PUBLIC_URL}/sounds/SE/buttonClick.mp3`,
    { interrupt: true }
  );
  // モーダル
  const [howToPlayModal, setShowHowToPlayModal] = useState(false);
  const [settingModal, setShowSettingModal] = useState(false);
  //
  const howToPlayClick = () => {
    setShowHowToPlayModal(true);
    playButtonClick();
  };
  const settingClick = () => {
    setShowSettingModal(true);
    playButtonClick();
  };
  //
  return (
    <>
      <Header />
      <div className="w-3/5 mx-auto">
        <MainTitle />
        <div className="flex justify-center">
          <Link
            to="/play1"
            className="button"
            onMouseEnter={() => playButtonHover()}
            onClick={() => playButtonClick()}
          >
            1部
          </Link>
          <Link
            to="/play2"
            className="button"
            onMouseEnter={() => playButtonHover()}
            onClick={() => playButtonClick()}
          >
            2部
          </Link>
          <Link
            to="play3"
            className="button"
            onMouseEnter={() => playButtonHover()}
            onClick={() => playButtonClick()}
          >
            3部
          </Link>
          <Link
            to="/play4"
            className="button"
            onMouseEnter={() => playButtonHover()}
            onClick={() => playButtonClick()}
          >
            4部
          </Link>
          <Link
            to="/play5"
            className="button"
            onMouseEnter={() => playButtonHover()}
            onClick={() => playButtonClick()}
          >
            5部
          </Link>
        </div>
        <div className="flex justify-center">
          <button
            onClick={howToPlayClick}
            className="mr-8"
            onMouseEnter={() => playButtonHover()}
          >
            <span className="button">遊び方</span>
          </button>
          <button
            onClick={settingClick}
            className="ml-8"
            onMouseEnter={() => playButtonHover()}
          >
            <span className="button">設定</span>
          </button>
        </div>
      </div>
      <Footer />
      <HowToPlayModal
        showFlag={howToPlayModal}
        setShowModal={setShowHowToPlayModal}
        subHeading="遊び方"
      />
      <SettingModal
        showFlag={settingModal}
        setShowModal={setShowSettingModal}
        subHeading="設定"
        bgm={props.bgm}
        setBgm={props.setBgm}
        se={props.se}
        setSe={props.setSe}
        typeSound={props.typeSound}
        setTypeSound={props.setTypeSound}
        missSound={props.missSound}
        setMissSound={props.setMissSound}
      />
      <TouchToStartModal
        showFlag={props.showFlag}
        setShowModal={props.setShowModal}
      />
    </>
  );
};

export default Home;
