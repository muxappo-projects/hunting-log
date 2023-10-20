import ImgGetter from "./ImgGetter";
import { useEffect, forwardRef } from "react";
import waterElem from "../images/water_element.png";
import fireElem from "../images/fire_element.png";
import dragonElem from "../images/dragon_element.png";
import thunderElem from "../images/thunder_element.png";
import iceElem from "../images/ice_element.png";
import poisonElem from "../images/poison_element.png";

const MonsterDetails = forwardRef(({ monster, setMonster }, ref) => {
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [monster]);
  console.log(monster);

  const biggestWeakness = monster.weaknesses.find((weakness) => {
    return weakness.stars === 3;
  });

  function clearSelection() {
    setMonster("");
  }

  function formatContent(content) {
    return content
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const elements = {
    water: waterElem,
    fire: fireElem,
    dragon: dragonElem,
    thunder: thunderElem,
    ice: iceElem,
    poison: poisonElem,
  };

  return (
    <section className="panel-container" ref={ref}>
      <div className="monster-panel">
        <h3 className="monster-species">{formatContent(monster.species)}</h3>
        <h2 className="monster-name">{monster.name}</h2>
        <ImgGetter monsterName={monster.name} setMonster={setMonster} />
        {biggestWeakness && (
          <div className="weakness-container">
            <p>Weakness: {formatContent(biggestWeakness.element)} damage</p>
            <img
              className="element-icon"
              src={elements[biggestWeakness.element]}
              alt={`The in-game icon for ${biggestWeakness.element} damage`}
            />
          </div>
        )}
        <p className="monster-desc">{monster.description}</p>
        <button onClick={clearSelection}>Close Monster Profile</button>
      </div>
    </section>
  );
});

export default MonsterDetails;
