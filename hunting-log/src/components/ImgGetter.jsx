import monsterDB from "../../monsters/monsters.json";

export default function ImgGetter({ monsterName }) {
  const { monsters } = monsterDB;
  const matchingMonster = monsters.find(
    (monster) => monster.name === monsterName
  );
  const { games } = matchingMonster;
  const matchingGame = "Monster Hunter World";

  const { image } = games.find((game) => game.game === matchingGame);

  return (
    <img
      src={`../../monsters/icons/${image}`}
      alt={`An icon of ${monsterName}`}
      height={200}
      width={200}
    />
  );
}
