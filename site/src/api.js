import request from "axios";

export function fetchMonsterByName(searchTerm) {
  return request
    .get(`https://mhw-db.com/monsters?q={"name": "${searchTerm}"}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
}

export function fetchLargeMonsters() {
  return request
    .get(`https://mhw-db.com/monsters?q={"type": "large"}`)
    .then(({ data }) => {
      return data;
    });
}

export function fetchSmallMonsters() {
  return request
    .get(`https://mhw-db.com/monsters?q={"type": "small"}`)
    .then(({ data }) => {
      return data;
    });
}

export function fetchAllMonsters() {
  return request.get("https://mhw-db.com/monsters").then(({ data }) => {
    return data;
  });
}

export function fetchMonsterDB() {
  return request.get("/monster-hunter-DB/monsters.json").then(({ data }) => {
    return data;
  });
}

export function fetchMonstersBySpecies(species, size) {
  return request
    .get(
      `https://mhw-db.com/monsters?q={"species": "${species}", "type": "${size}"}`
    )
    .then(({ data }) => {
      return data;
    });
}
