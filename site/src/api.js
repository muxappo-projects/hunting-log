import request from "axios";

export function fetchMonsterByName(searchTerm) {
  return request
    .get(`https://mhw-db.com/monsters?q={"name": "${searchTerm}"}`)
    .then(({ data }) => {
      return data;
    });
}

export function fetchAllMonsters() {
  return request
    .get(`https://mhw-db.com/monsters?q={"type": "large"}`)
    .then(({ data }) => {
      return data;
    });
}
