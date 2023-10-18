import ImgGetter from "./ImgGetter";
import { useEffect, forwardRef } from "react";

const MonsterDetails = forwardRef(
  ({ returnedMonster: [monster], setMonster }, ref) => {
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
          <button onClick={clearSelection}>Close Monster Card</button>
        </div>
      </section>
    );
  }
);

export default MonsterDetails;
