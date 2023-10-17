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
      {monster && (
        <MonsterDetails returnedMonster={monster} setMonster={setMonster} />
      )}
      <FindMonster setMonster={setMonster} />
      <h3>Or click on any of the below icons for more info</h3>
      <MonsterList setMonster={setMonster} />
    </div>
  );
}
