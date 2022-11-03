import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeModal from "../Modal/HomeModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [subHeading, setSubHeading] = useState("");
  const showHowToPlayModal = () => {
    setSubHeading("遊び方");
    setShowModal(true);
  };
  const showSettingModal = () => {
    setSubHeading("設定");
    setShowModal(true);
  };
  return (
    <>
      <div>Header</div>
      <div>Title</div>
      <Link to="/play1">1部</Link>
      <Link to="/play2">2部</Link>
      <Link to="/play3">3部</Link>
      <Link to="/play4">4部</Link>
      <Link to="/play5">5部</Link>
      <button onClick={showHowToPlayModal}>遊び方</button>
      <button onClick={showSettingModal}>設定</button>
      <div>Footer</div>
      <HomeModal
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setSubHeading={setSubHeading}
      />
    </>
  );
}

export default Home;
