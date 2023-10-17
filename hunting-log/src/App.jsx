import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import DisplayMonster from "./components/DisplayMonster";
import MonsterList from "./components/MonsterList";

export default function App() {
  const [monster, setMonster] = useState("");

  return (
    <div className="main">
      <Header />
      <FindMonster setMonster={setMonster} />
      {monster && (
        <DisplayMonster returnedMonster={monster} setMonster={setMonster} />
      )}
      <MonsterList />
    </div>
  );
}
