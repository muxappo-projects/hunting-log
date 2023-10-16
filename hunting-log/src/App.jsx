import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import DisplayMonster from "./components/DisplayMonster";

export default function App() {
  const [monster, setMonster] = useState("");

  return (
    <div>
      <Header />
      <FindMonster setMonster={setMonster} />
      {monster && <DisplayMonster returnedMonster={monster} />}
    </div>
  );
}
