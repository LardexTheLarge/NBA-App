import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SinglePlayerList from "../components/SinglePlayerList";
import { PaginationControl } from "react-bootstrap-pagination-control";

const SinglePlayer = (props) => {
  console.log(props.results);
  return (
    <Row xs={1} md={3} className="g-4 mb-2">
      {props.results.map((players) => (
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
};
export default SinglePlayer;
