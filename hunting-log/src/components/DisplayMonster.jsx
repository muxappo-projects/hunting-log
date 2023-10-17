import ImgGetter from "./ImgGetter";

export default function DisplayMonster({ returnedMonster, setMonster }) {
  const [monster] = returnedMonster;

  function clearSelection() {
    setMonster("");
  }

  return (
    <div className="monster-panel">
      <h2>
        {monster.name}, {monster.species === "elder dragon" ? "an" : "a"}{" "}
        {monster.species}
      </h2>
      <ImgGetter monsterName={monster.name} />
      <p>{monster.description}</p>
      <button onClick={clearSelection}>Clear</button>
    </div>
  );
}
