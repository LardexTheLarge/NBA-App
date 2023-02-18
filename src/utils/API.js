import axios from "axios";

const player = (query) =>
  axios.get(
    `https://www.balldontlie.io/api/v1/players?per_page=10&search=${query}`
  );

export default { player };
