import { useEffect, forwardRef } from "react";
import ImgGrabber from "./ImgGrabber";
import formatContent from "../utils";
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

  const biggestWeakness = monster.weaknesses.find((weakness) => {
    return weakness.stars === 3;
  });

  const elements = {
    water: waterElem,
    fire: fireElem,
    dragon: dragonElem,
    thunder: thunderElem,
    ice: iceElem,
    poison: poisonElem,
  };

  function clearSelection() {
    setMonster("");
  }

  return (
    <section className="panel-container" ref={ref}>
      <div className="monster-panel">
        <h3 className="monster-species">{formatContent(monster.species)}</h3>
        <div className="monster-name-container">
          <h2 className="monster-name">{monster.name}</h2>
        </div>
        <ImgGrabber monsterName={monster.name} setMonster={setMonster} />

        {biggestWeakness && (
          <div className="weakness-container">
            <p>Weakness: {formatContent(biggestWeakness.element)} damage</p>
            <img
              className="element-icon"
              src={elements[biggestWeakness.element]}
              alt={formatContent(biggestWeakness.element)}
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
