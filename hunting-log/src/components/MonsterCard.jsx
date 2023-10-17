import ImgGetter from "./ImgGetter";

export default function MonsterCard({ name }) {
  return (
    <li>
      <h3>{name}</h3>
      <ImgGetter monsterName={name} />
    </li>
  );
}
