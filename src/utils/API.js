import axios from "axios";

const player = (query) =>
  axios.get(
    `https://www.balldontlie.io/api/v1/players?per_page=27&search=${query}`
  );

export default { player };
