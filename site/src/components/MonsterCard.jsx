import ImgGetter from "./ImgGetter";

export default function MonsterCard({ name, setMonster, setErrorMsg }) {
  return (
    <li>
      <h3>{name}</h3>
      <ImgGetter
        monsterName={name}
        setMonster={setMonster}
        setErrorMsg={setErrorMsg}
      />
    </li>
  );
}
