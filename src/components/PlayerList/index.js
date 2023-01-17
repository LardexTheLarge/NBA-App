import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function PlayerList(props) {
  console.log(props.results);
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <div>{result.first_name}</div>
        </li>
      ))}
    </ul>
  );
}

export default PlayerList;
