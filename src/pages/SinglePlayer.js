import { useState, useEffect } from "react";
import SinglePlayerList from "../components/SinglePlayerList";
import { PaginationControl } from "react-bootstrap-pagination-control";

const SinglePlayer = (props) => {
  console.log(props);
  return <SinglePlayerList props={props} />;
};
export default SinglePlayer;
