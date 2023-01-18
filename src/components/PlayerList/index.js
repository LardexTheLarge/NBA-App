import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function PlayerList(props) {
  console.log(props.results);
  if (!props.results.length) {
    return <h3>No Players</h3>;
  }
  return (
    <Row xs={1} md={3} className="g-4">
      {props.results.map((players) => (
        <Col key={players._id}>
          <Card className="bg-main">
            <Card.Body>
              <Card.Title className="text-light">
                {players.first_name} {players.last_name}
              </Card.Title>
              <div className="d-grid">Position: {players.position}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PlayerList;
