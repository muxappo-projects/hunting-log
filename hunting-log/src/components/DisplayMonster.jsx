import ImgGetter from "./ImgGetter";

export default function DisplayMonster({ returnedMonster }) {
  console.log(returnedMonster);
  const [monster] = returnedMonster;
  return (
    <div className="monster-panel">
      <h2>
        {monster.name} ({monster.species})
      </h2>
      <ImgGetter monsterName={monster.name} />
      <p>{monster.description}</p>
    </div>
  );
}
