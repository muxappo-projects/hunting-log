import ImgGetter from "./ImgGetter";
import { useEffect, forwardRef } from "react";

const MonsterDetails = forwardRef(({ returnedMonster, setMonster }, ref) => {
  const [monster] = returnedMonster;

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [monster]);

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
    <section className="panel-container" ref={ref}>
      <div className="monster-panel">
        <h3 className="monster-species">{formatSpecies(monster.species)}</h3>
        <h2 className="monster-name">{monster.name}</h2>
        <ImgGetter monsterName={monster.name} setMonster={setMonster} />
        <p className="monster-desc">{monster.description}</p>
        <button onClick={clearSelection}>Hide Monster Profile</button>
      </div>
    </section>
  );
});

export default MonsterDetails;
