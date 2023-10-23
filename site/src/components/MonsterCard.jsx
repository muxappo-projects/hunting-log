import ImgGrabber from "./ImgGrabber";

export default function MonsterCard({ name, setMonster, setErrorMsg }) {
  return (
    <li>
      <h3>{name}</h3>
      <ImgGrabber
        monsterName={name}
        setMonster={setMonster}
        setErrorMsg={setErrorMsg}
      />
    </li>
  );
}
