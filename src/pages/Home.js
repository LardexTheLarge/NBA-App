import React from "react";
import { getAllPlayers } from "../api/index";

const Home = () => {
  const allPlayers = getAllPlayers || [];
  console.log(allPlayers);
  return <div></div>;
};

export default Home;
