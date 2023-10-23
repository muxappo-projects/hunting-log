import ImgGrabber from "./ImgGrabber";
import * as api from "../api";

export default function MonsterCard({ name, setMonster, setErrorMsg }) {
  function searchByCard() {
    api.fetchMonsterByName(name).then(([returnedMonster]) => {
      setMonster(returnedMonster);
      setErrorMsg("");
    });
  }
  return (
    <li onClick={searchByCard}>
      <h3>{name}</h3>
      <ImgGrabber monsterName={name} />
    </li>
  );
}
