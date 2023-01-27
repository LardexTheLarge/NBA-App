import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

function NewsList({ posts, loading }) {
  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((news) => (
        <Col key={news.length}>
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
