import ImgGetter from "./ImgGetter";

export default function MonsterCard({ name, setMonster }) {
  return (
    <li>
      <h3>{name}</h3>
      <ImgGetter monsterName={name} setMonster={setMonster} />
    </li>
  );
}
