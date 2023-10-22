import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MonsterDetails from "./components/MonsterDetails";
import MonsterList from "./components/MonsterList";
import "./App.css";

export default function App() {
  const [monster, setMonster] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const monsterDetailsRef = useRef(null);
  const topRef = useRef(null);

  return (
    <main className="main" ref={topRef}>
      <Header />

      {monster && (
        <MonsterDetails
          monster={monster}
          setMonster={setMonster}
          ref={monsterDetailsRef}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              monster={monster}
              setMonster={setMonster}
              errorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
            />
          }
        />

        <Route
          path="/small-monsters"
          element={
            <MonsterList
              size="small"
              setMonster={setMonster}
              setErrorMsg={setErrorMsg}
              topRef={topRef}
            />
          }
        ></Route>

        <Route
          path="/large-monsters"
          element={
            <MonsterList
              size="large"
              setMonster={setMonster}
              setErrorMsg={setErrorMsg}
              topRef={topRef}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}
