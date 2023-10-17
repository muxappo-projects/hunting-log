import { useState, useEffect } from "react";
import * as api from "../api.js";
import MonsterCard from "./MonsterCard.jsx";

export default function MonsterList() {
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    api.fetchAllMonsters().then((monsters) => {
      setMonsterList(monsters);
    });
  });

  return (
    <ul className="monster-list">
      {monsterList.map((monster) => {
        return (
          <MonsterCard
            key={monster.id}
            name={monster.name}
            desc={monster.description}
          />
        );
      })}
    </ul>
  );
}
