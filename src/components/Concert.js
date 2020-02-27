import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BasicButton from './input/BasicButton'

const Concert = (props) => {
  return (
    
      <Card className="text-center my-2">
        <Card.Body>
          <Row>
            <Col xs={12} md={8}>
              <Card.Title>{props.display}</Card.Title>
              <Card.Text className="mb-0">
                <strong>Venue: </strong>{props.venueName} in {props.location}
              </Card.Text>
              <Card.Text>
                <strong>Date: </strong>{props.date} @ {props.time}
              </Card.Text>
            </Col>
            <Col xs={12} md={4}>
              <BasicButton size="sm" className="mr-1" style={{ width: "40%" }} variant="warning" value="Maybe!" />
              <BasicButton size="sm" className="ml-1" style={{ width: "40%" }} variant="success" value="Going!" />
              <BasicButton size="sm" block="block" variant="info" value="More Info" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}

export default Concert;