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
      {currentFilter && (
        <p>
          Showing: {currentFilter}
          {currentFilter === "Fish" ? "" : "s"}
        </p>
      )}

      {currentFilter && (
        <button onClick={() => setCurrentFilter("")}>Reset Filter</button>
      )}
      {filters.map((species, index) => {
        return (
          <button
            key={index}
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
          </button>
        );
      })}
    </div>
  );
}
