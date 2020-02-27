import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import BasicButton from './input/BasicButton'

const Concert = (props) => {

  const handleGoingClick = (event, props) => {
    event.preventDefault()
  }
  
  const handleInfoClick = (event) => {
    event.preventDefault()
  }

  return (
      <Card className="text-center my-2">
        <Card.Body>
          <Row>
            <Col xs={12} md={9}>
              <Card.Title>{props.display}</Card.Title>
              <Card.Text className="mb-1">
                <strong>Venue: </strong>{props.venueName} in {props.location} | <strong>Date: </strong>{props.date} @ {props.time}
              </Card.Text>
            </Col>
            <Col xs={12} md={3}>
              <BasicButton handleClick={event => handleGoingClick(event, props)} size="sm" className="mb-1" block="block" variant="success" value="Going!" />
              <BasicButton handleClick={event => handleInfoClick(event, props)} size="sm" className="mt-1" block="block" variant="info" value="More Info" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}

export default Concert;