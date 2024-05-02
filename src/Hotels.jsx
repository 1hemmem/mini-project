import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Hotels({ hotels }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {hotels.map(hotel => (
        <Col key={hotel.id}>
          <Card>
            <Card.Img variant="top" src={hotel.image} />
            <Card.Body>
              <Card.Title>{hotel.name}</Card.Title>
              <Card.Text>{hotel.location}</Card.Text>
              <Button variant="primary">Book now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Hotels;