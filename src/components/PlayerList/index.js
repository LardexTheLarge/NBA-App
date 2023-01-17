import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function PlayerList(props) {
  console.log(props.results);
  return (
    <div className="container mx-auto mt-4">
      <div className=" row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          {props.results.map((result) => (
            <div className="card card-size" key={result.id}>
              <div className="card-body">
                <h5 className="card-title">
                  {result.first_name} {result.last_name}
                </h5>
                <h3>{result.position}</h3>
                <h3>{result.team.full_name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerList;
