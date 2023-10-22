import { useState } from "react";
import * as api from "../api.js";

export default function FindMonster({ setMonster, errorMsg, setErrorMsg }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    api
      .fetchMonsterByName(searchTerm)
      .then(([returnedMonster]) => {
        setMonster(returnedMonster);
        setSearchTerm("");
        setErrorMsg("");
      })
      .catch((err) => {
        setErrorMsg("Monster not found!");
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
        placeholder="Anjanath, Pukei-Pukei..."
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />

      <button className="search-button">Search</button>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </form>
  );
}
