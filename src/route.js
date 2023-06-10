import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Play from "./Pages/play";
import Score from "./Pages/score";

function App() {
  // sound情報の状態管理
  const [bgm, setBgm] = useState(true);
  const [se, setSe] = useState(true);
  const [typeSound, setTypeSound] = useState(true);
  const [missSound, setMissSound] = useState(true);
  // score情報の状態管理
  const [correctCount, setCorrectCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  // ブラウザ初期表示の状態管理
  const [touchToStartModal, setTouchToStartModal] = useState(true);
  // HTML
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
                showFlag={touchToStartModal}
                setShowModal={setTouchToStartModal}
              />
            }
          ></Route>
          <Route
            path="/play1"
            element={
              <Play
                bgm={bgm}
                se={se}
                typeSound={typeSound}
                missSound={missSound}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
          <Route
            path="/play2"
            element={
              <Play
                bgm={bgm}
                se={se}
                typeSound={typeSound}
                missSound={missSound}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
          <Route
            path="/play3"
            element={
              <Play
                bgm={bgm}
                se={se}
                typeSound={typeSound}
                missSound={missSound}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
          <Route
            path="/play4"
            element={
              <Play
                bgm={bgm}
                se={se}
                typeSound={typeSound}
                missSound={missSound}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
          <Route
            path="/play5"
            element={
              <Play
                bgm={bgm}
                se={se}
                typeSound={typeSound}
                missSound={missSound}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
          <Route
            path="/score"
            element={
              <Score
                se={se}
                correctCount={correctCount}
                setCorrectCount={setCorrectCount}
                missCount={missCount}
                setMissCount={setMissCount}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
