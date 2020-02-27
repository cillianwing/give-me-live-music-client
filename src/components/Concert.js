import React from 'react'
import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BasicButton from './input/BasicButton';
import { newConcert } from '../actions/userConcerts'

const Concert = (props) => {

  const handleGoingClick = (event, params) => {
    event.preventDefault()
    props.newConcert(params, props.user)
  }
  
  const handleInfoClick = (event, props) => {
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

const mapStateToProps = state => {
  return {
    user: state.currentUser.user
  }
}

export default connect(mapStateToProps, { newConcert })(Concert);