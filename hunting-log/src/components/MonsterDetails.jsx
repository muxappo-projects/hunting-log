import ImgGetter from "./ImgGetter";

export default function MonsterDetails({ returnedMonster, setMonster }) {
  const [monster] = returnedMonster;

  function clearSelection() {
    setMonster("");
  }

  function formatSpecies(species) {
    return species
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <section className="panel-container">
      <div className="monster-panel">
        <h3 className="monster-species">{formatSpecies(monster.species)}</h3>
        <h2 className="monster-name">{monster.name}</h2>
        <ImgGetter monsterName={monster.name} setMonster={setMonster} />
        <p>{monster.description}</p>
        <button onClick={clearSelection}>Hide Monster Profile</button>
      </div>
    </section>
  );
}
