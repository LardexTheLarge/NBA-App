import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function SinglePlayerList({ props, loading }) {
  console.log(props);
  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <Row xs={1} md={3} className="g-4 mb-2">
      {props.map((players) => (
        <Col key={players.id}>
          <Card className="bg-main">
            <Card.Body>
              <Card.Title className="text-light">
                {players.first_name} {players.last_name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Position: {players.position}
              </Card.Subtitle>
              <Card.Text className="text-light">
                Team: {players.team.full_name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SinglePlayerList;
