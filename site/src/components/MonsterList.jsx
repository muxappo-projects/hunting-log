import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext.jsx";
import ScrollButton from "./ScrollButton.jsx";
import MonsterCard from "./MonsterCard.jsx";
import * as api from "../api.js";

export default function MonsterList({ size, setMonster, setErrorMsg, topRef }) {
  const [monsterList, setMonsterList] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    api.fetchAllMonsters().then((monsters) => {
      setMonsterList(() => {
        return monsters.filter((monster) => monster.type === size);
      });
      setIsLoading(false);
    });
  }, []);

  if (isLoading === true) return <p>Fetching Monster Info...</p>;

  return (
    <div className="list-background">
      <h3 className="list-subheader">
        Click on any of the icons to view more info:
      </h3>
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
      <ScrollButton ref={topRef} />
    </div>
  );
}
