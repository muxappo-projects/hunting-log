import { useEffect, useState } from "react";
import * as api from "../api";

export default function ImgGrabber({ monsterName }) {
  const { isLoading, setIsLoading } = useState(true);
  const [monsterImage, setMonsterImage] = useState(null);

  useEffect(() => {
    api.fetchMonsterDB().then(({ monsters }) => {
      const foundMonster = monsters.find(
        (monster) => monster.name === monsterName
      );

      const gameObj = foundMonster.games.find(
        (game) => game.game === "Monster Hunter World"
      );
      if (gameObj && gameObj.image) {
        setMonsterImage(gameObj.image);
        setIsLoading(false);
      }
    });
  }, [monsterName]);

  if (isLoading === true) return <p>Fetching Monster Info...</p>;

  return (
    <img
      src={`/monster-hunter-DB/icons/${monsterImage}`}
      alt={monsterName}
      height={150}
      width={150}
    />
  );
}
