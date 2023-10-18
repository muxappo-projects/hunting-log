import monsterDB from "../../monsters/monsters.json";
import * as api from "../api";

export default function ImgGetter({ monsterName, setMonster, setErrorMsg }) {
  const { monsters } = monsterDB;
  const matchingMonster = monsters.find(
    (monster) => monster.name === monsterName
  );
  const { games } = matchingMonster;
  const matchingGame = "Monster Hunter World";

  const { image } = games.find((gameObj) => gameObj.game === matchingGame);

  function searchByCard() {
    api.fetchMonsterByName(monsterName).then((returnedMonster) => {
      setMonster(returnedMonster);
      setErrorMsg("");
    });
  }

  return (
    <img
      src={`../../monsters/icons/${image}`}
      alt={`An icon of ${monsterName}`}
      height={150}
      width={150}
      onClick={searchByCard}
    />
  );
}