import React from "react";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play from "./Pages/Play";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
