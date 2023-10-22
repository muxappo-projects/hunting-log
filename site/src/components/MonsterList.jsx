import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../contexts/LoadingContext.jsx";
import ScrollButton from "./ScrollButton.jsx";
import MonsterCard from "./MonsterCard.jsx";
import Filters from "./Filters.jsx";
import * as api from "../api.js";

export default function MonsterList({ size, setMonster, setErrorMsg, topRef }) {
  const [monsterList, setMonsterList] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
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
      <Link
        to={"/"}
        onClick={() => {
          setIsLoading(true);
          setMonster("");
        }}
      >
        <button>Return to Base</button>
      </Link>

      <h3 className="list-subheader">Filter list by:</h3>
      <Filters monsterSize={size} setMonsterList={setMonsterList} />

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

      {size === "large" && <ScrollButton ref={topRef} />}
    </div>
  );
}
