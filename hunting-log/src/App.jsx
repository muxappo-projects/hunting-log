import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import MonsterDetails from "./components/MonsterDetails";
import MonsterList from "./components/MonsterList";

export default function App() {
  const [monster, setMonster] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="main">
      <Header />
      <FindMonster
        setMonster={setMonster}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      {monster && (
        <MonsterDetails returnedMonster={monster} setMonster={setMonster} />
      )}
      <h3 className="list-subheader">
        ...or click on any of the below icons for more info!
      </h3>
      <MonsterList setMonster={setMonster} setErrorMsg={setErrorMsg} />
    </div>
  );
}
