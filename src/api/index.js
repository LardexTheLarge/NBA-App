export async function getAllPlayers(query) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://free-nba.p.rapidapi.com/${query}?page=0&per_page=25`,
    options
  );
  const players = await response.json();
  return players;
  // axios.request(options).then(function (response) {
  //   return response.data.data;
  // });
}
