import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play from "./Pages/Play";
import Score from "./Pages/Score";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play1" element={<Play />}></Route>
          <Route path="/play2" element={<Play />}></Route>
          <Route path="/play3" element={<Play />}></Route>
          <Route path="/play4" element={<Play />}></Route>
          <Route path="/play5" element={<Play />}></Route>
          <Route path="/score" element={<Score />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
