import React from "react";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play3 from "./Pages/Play3";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play3" element={<Play3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
