import request from "axios";

export function fetchMonsterByName(searchTerm) {
  return request
    .get(`https://mhw-db.com/monsters?q={"name": "${searchTerm}"}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => err);
}

export function fetchAllMonsters() {
  return request
    .get(`https://mhw-db.com/monsters?q={"type": "large"}`)
    .then(({ data }) => {
      return data;
    });
}
