import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import HowToPlayModal from "../Modal/HowToPlayModal";
import SettingModal from "../Modal/SettingModal";
import "../css/button.css";

const Home = (props) => {
  //
  const [showModal, setShowHowToPlayModal] = useState(false);
  const [settingModal, setShowSettingModal] = useState(false);
  //
  const showHowToPlayModal = () => {
    setShowHowToPlayModal(true);
  };
  const showSettingModal = () => {
    setShowSettingModal(true);
  };
  //
  return (
    <>
      <Header />
      <div className="w-3/5 mx-auto">
        <MainTitle />
        <div className="flex justify-center">
          <Link to="/play1" className="button">
            1部
          </Link>
          <Link to="/play2" className="button">
            2部
          </Link>
          <Link to="/play3" className="button">
            3部
          </Link>
          <Link to="/play4" className="button">
            4部
          </Link>
          <Link to="/play5" className="button">
            5部
          </Link>
        </div>
        <div className="flex justify-center">
          <button onClick={showHowToPlayModal} className="mr-8">
            <span className="button">遊び方</span>
          </button>
          <button onClick={showSettingModal} className="ml-8">
            <span className="button">設定</span>
          </button>
        </div>
      </div>
      <Footer />
      <HowToPlayModal
        showFlag={showModal}
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
    </>
  );
};

export default Home;
