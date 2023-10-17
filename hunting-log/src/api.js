export function fetchMonsterByName(searchTerm) {
  return fetch(`https://mhw-db.com/monsters?q={"name": "${searchTerm}"}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data || data.length === 0) {
        throw new Error("Oops! Monster not found!");
      }
      return data;
    });
}

export function fetchAllMonsters() {
  return fetch(`https://mhw-db.com/monsters?q={"type": "large"}`).then(
    (response) => response.json()
  );
}
