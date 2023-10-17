import { useState } from "react";
import * as api from "../api.js";

export default function FindMonster({ setMonster }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    api.fetchMonsterByName(searchTerm).then((returnedMonster) => {
      console.log(searchTerm);
      setMonster(returnedMonster);
      setSearchTerm("");
    });
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <label htmlFor="monster-input">Search for a monster: </label>
      <input
        className="search-field"
        id="monster-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className="search-button">Search</button>
    </form>
  );
}
