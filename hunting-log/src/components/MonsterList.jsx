import { useState, useEffect } from "react";
import * as api from "../api.js";
import MonsterCard from "./MonsterCard.jsx";

export default function MonsterList({ setMonster, setErrorMsg }) {
  const [monsterList, setMonsterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchAllMonsters().then((monsters) => {
      setMonsterList(monsters);
      setIsLoading(false);
    });
  });

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <ul className="monster-list">
      {monsterList.map((monster) => {
        return (
          <MonsterCard
            key={monster.id}
            name={monster.name}
            species={monster.species}
            setMonster={setMonster}
            setErrorMsg={setErrorMsg}
          />
        );
      })}
    </ul>
  );
}
