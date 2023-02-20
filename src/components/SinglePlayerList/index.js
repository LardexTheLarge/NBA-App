import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function SinglePlayerList({ props, loading }) {
  console.log(props);
  if (loading) {
    return <h3>...Loading</h3>;
  }
  // return (

  // );
}

export default SinglePlayerList;
