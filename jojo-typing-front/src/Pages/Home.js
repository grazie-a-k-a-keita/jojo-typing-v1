import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>Header</div>
      <div>Title</div>
      <Link to="/play1">1部</Link>
      <Link to="/play2">2部</Link>
      <Link to="/play3">3部</Link>
      <Link to="/play4">4部</Link>
      <Link to="/play5">5部</Link>
      <button>遊び方</button>
      <button>設定</button>
      <div>Footer</div>
      <div>各種モーダル</div>
    </div>
  );
}

export default Home;
