import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function StatsList({ posts, loading }) {
  console.log(posts);
  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <Row xs={1} md={3} className="g-4">
      {posts.map((stats) => (
        <Col key={stats.id}>
          <Card className="bg-main">
            <Card.Body>
              <Card.Title className="text-light">stats</Card.Title>
              <div></div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StatsList;
