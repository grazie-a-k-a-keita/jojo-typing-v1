import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import HowToPlayModal from "../Modal/HowToPlayModal";
import SettingModal from "../Modal/SettingModal";
import "../css/button.css";

function Home() {
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
      <div class="w-3/5 mx-auto">
        <MainTitle />
        <div class="flex justify-center">
          <Link to="/play1" class="button">
            1部
          </Link>
          <Link to="/play2" class="button">
            2部
          </Link>
          <Link to="/play3" class="button">
            3部
          </Link>
          <Link to="/play4" class="button">
            4部
          </Link>
          <Link to="/play5" class="button">
            5部
          </Link>
        </div>
        <div class="flex justify-center">
          <button onClick={showHowToPlayModal} class="mr-8">
            <span class="button">遊び方</span>
          </button>
          <button onClick={showSettingModal} class="ml-8">
            <span class="button">設定</span>
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
      />
    </>
  );
}

export default Home;
