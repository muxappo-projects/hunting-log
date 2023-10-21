import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import MonsterDetails from "./components/MonsterDetails";
import MonsterList from "./components/MonsterList";
import ScrollButton from "./components/ScrollButton";

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
      <FindMonster
        monster={monster}
        setMonster={setMonster}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <h3 className="list-subheader">
        ...or click on any of the below icons for more info!
      </h3>
      <MonsterList setMonster={setMonster} setErrorMsg={setErrorMsg} />
      <ScrollButton ref={topRef} />
    </main>
  );
}
