import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

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
              <Card.Subtitle className="mb-2 text-muted">
                {game.home_team.abbreviation}: {game.home_team_score}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {game.visitor_team.abbreviation}: {game.visitor_team_score}
              </Card.Subtitle>
              <Card.Text className="d-grid text-light">
                Date: {dayjs(game.date).format("MMMM-D-YYYY")}
              </Card.Text>
              <Button variant="primary">Game Stats</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GameList;
