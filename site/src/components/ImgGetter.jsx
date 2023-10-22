import { useEffect, useState, useContext } from "react";
import * as api from "../api";
import { LoadingContext } from "../contexts/LoadingContext";

export default function ImgGetter({ monsterName, setMonster, setErrorMsg }) {
  const [monsterDB, setMonsterDB] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [matchingMonster, setMatchingMonster] = useState(null);
  const [games, setGames] = useState(null);
  const [matchingImage, setMatchingImage] = useState(null);

  useEffect(() => {
    api.fetchMonsterDB().then((monsters) => {
      setMonsterDB(monsters);

      const foundMonster = monsters.find(
        (monster) => monster.name === monsterName
      );
      setMatchingMonster(foundMonster);

      if (foundMonster && foundMonster.games) {
        setGames(foundMonster.games);

        const gameObj = foundMonster.games.find(
          (game) => game.game === "Monster Hunter World"
        );

        if (gameObj && gameObj.image) {
          setMatchingImage(gameObj.image);
        }
      }

      setIsLoading(false);
    });
  }, [monsterName]);

  function searchByCard() {
    api.fetchMonsterByName(monsterName).then(([returnedMonster]) => {
      setMonster(returnedMonster);
      setErrorMsg("");
    });
  }

  if (isLoading === true) return <p>Fetching Monster Info...</p>;

  return (
    <img
      src={`/monster-hunter-DB/icons/${matchingImage}`}
      alt={`An icon of ${monsterName}`}
      height={150}
      width={150}
      onClick={searchByCard}
    />
  );
}
