import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import FindMonster from "./components/FindMonster";
import MonsterDetails from "./components/MonsterDetails";
import MonsterList from "./components/MonsterList";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [monster, setMonster] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const monsterDetailsRef = useRef(null);
  const topRef = useRef(null);

  return (
    <div className="main" ref={topRef}>
      <Header />
      {monster && (
        <MonsterDetails
          returnedMonster={monster}
          setMonster={setMonster}
          ref={monsterDetailsRef}
        />
      )}
      <FindMonster
        setMonster={setMonster}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <h3 className="list-subheader">
        ...or click on any of the below icons for more info!
      </h3>
      <MonsterList setMonster={setMonster} setErrorMsg={setErrorMsg} />
      <ScrollToTop ref={topRef} />
    </div>
  );
}
