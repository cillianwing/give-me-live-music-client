import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Concert = (props) => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{props.display}</Card.Title>
          </Col>
          <Col>
            <Card.Title>Button will go here</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>
              <strong>Date: </strong>{props.date} - {props.time}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Button will go here</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>
              <strong>Venue: </strong>{props.venueName}, {props.location}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Button will go here</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Concert;