import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function GameList({ posts, loading }) {
  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((game) => (
        <Col key={game.id}>
          <Card className="bg-main">
            <Card.Body>
              <Card.Title className="text-light">
                {game.home_team.full_name} vs {game.visitor_team.full_name}
              </Card.Title>
              <div className="d-grid">date: {game.date}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GameList;
