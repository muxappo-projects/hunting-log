import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import MonsterDetails from "./components/MonsterDetails";
import MonsterList from "./components/MonsterList";

export default function App() {
  const [monster, setMonster] = useState("");

  return (
    <div className="main">
      <Header />
      <FindMonster setMonster={setMonster} />
      {monster && (
        <MonsterDetails returnedMonster={monster} setMonster={setMonster} />
      )}
      <MonsterList setMonster={setMonster} />
    </div>
  );
}
