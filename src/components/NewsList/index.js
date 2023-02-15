import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function NewsList({ posts, loading }) {
  //inserts an id into each object in the array so the map method in the react component
  //can have a specific key
  posts = posts.map((item, index) => ({ ...item, id: index + 1 }));

  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <Row xs={1} md={2} className="g-4 mb-2">
      {posts.map((news) => (
        <Col key={news.id}>
          <Card className="bg-main">
            <Card.Body>
              <Card.Title className="text-light">{news.title}</Card.Title>
              <Card.Text>Source: {news.source}</Card.Text>
              <Button variant="primary" href={news.url} target="_blank">
                Article
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default NewsList;
