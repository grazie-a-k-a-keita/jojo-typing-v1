import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import HowToPlayModal from "../Modal/HowToPlayModal";
import SettingModal from "../Modal/SettingModal";

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
      <MainTitle />
      <Link to="/play1">1部</Link>
      <Link to="/play2">2部</Link>
      <Link to="/play3">3部</Link>
      <Link to="/play4">4部</Link>
      <Link to="/play5">5部</Link>
      <button onClick={showHowToPlayModal}>遊び方</button>
      <button onClick={showSettingModal}>設定</button>
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
