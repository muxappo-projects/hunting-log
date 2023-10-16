export function fetchMonsterByName(searchTerm) {
  return fetch(`https://mhw-db.com/monsters?q={"name": "${searchTerm}"}`).then(
    (response) => response.json()
  );
}
