import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play from "./Pages/Play";
import Score from "./Pages/Score";

function App() {
  // soundの情報を"useState"を使って状態管理
  const [bgm, setBgm] = useState(true);
  const [se, setSe] = useState(true);
  const [typeSound, setTypeSound] = useState(true);
  const [missSound, setMissSound] = useState(true);
  //
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bgm={bgm}
                setBgm={setBgm}
                se={se}
                setSe={setSe}
                typeSound={typeSound}
                setTypeSound={setTypeSound}
                missSound={missSound}
                setMissSound={setMissSound}
              />
            }
          ></Route>
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
