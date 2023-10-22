import * as api from "../api";
import { useState } from "react";

export default function Filters({ monsterSize, setMonsterList }) {
  const [currentFilter, setCurrentFilter] = useState("");

  const largeSpecies = [
    "Fanged Wyvern",
    "Brute Wyvern",
    "Piscine Wyvern",
    "Flying Wyvern",
    "Fanged Beast",
    "Elder Dragon",
  ];
  const smallSpecies = [
    "Fanged Wyvern",
    "Neopteron",
    "Wingdrake",
    "Fish",
    "Herbivore",
  ];

  const filters = monsterSize === "large" ? largeSpecies : smallSpecies;
  return (
    <div>
      <div>
        {currentFilter ? (
          <h3 className="filter-header">
            Showing {currentFilter}
            {currentFilter === "Fish" ? "" : "s"}
          </h3>
        ) : (
          <h3 className="filter-header">Showing all Species</h3>
        )}

        {currentFilter && (
          <button
            className="reset-filter-button"
            onClick={() => {
              api.fetchAllMonsters().then((monsters) => {
                setCurrentFilter("");
                setMonsterList(() => {
                  return monsters.filter(
                    (monster) => monster.type === monsterSize
                  );
                });
              });
            }}
          >
            Reset Filter
          </button>
        )}
      </div>
      <div>
        {filters.map((species, index) => {
          return (
            <button
              key={index}
              className="filter-button"
              onClick={() => {
                api
                  .fetchMonstersBySpecies(species.toLowerCase(), monsterSize)
                  .then((data) => {
                    setMonsterList(data);
                    setCurrentFilter(species);
                  });
              }}
            >
              {species}
              {species === "Fish" ? "" : "s"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
