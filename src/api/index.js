const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

export async function getAllPlayers() {
  const response = await fetch(
    "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
    options
  );
  return await response.json();
}
