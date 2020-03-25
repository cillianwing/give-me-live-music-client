import React from 'react'
import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BasicButton from '../input/BasicButton';
import { newConcert } from '../../actions/userConcerts'

const Concert = (props) => {

  const handleGoingClick = (event, params) => {
    event.preventDefault()
    console.log('a')
    props.newConcert(params, props.user)
    console.log('f')
  }
  
  const handleInfoClick = (event, props) => {
    event.preventDefault()
    // need to add actual action to handle click here
  }

  const checkConcerts = () => {
    return props.status === 'cancelled' ? 
      <BasicButton disabled="disabled" size="sm" className="mb-1" block="block" variant="danger" value="Cancelled!" /> : 
      props.concertIds.includes(props.apiId) ? 
      <BasicButton disabled="disabled" size="sm" className="mb-1" block="block" variant="warning" value="Already going!" /> : 
      <BasicButton handleClick={event => handleGoingClick(event, props)} size="sm" className="mb-1" block="block" variant="success" value="Going!" />
  }

  return (
      <Card className="text-center my-2">
        <Card.Body>
          <Row>
            <Col xs={12} md={9}>
              <Card.Title>{props.display}</Card.Title>
              <Card.Text className="mb-1">
                <strong>Venue: </strong>{props.venueName} in {props.location} | <strong>Date: </strong>{props.date}{props.time ? ` @ ${props.time}` : ''}
              </Card.Text>
            </Col>
            <Col xs={12} md={3}>
            {checkConcerts()}
            <BasicButton handleClick={event => handleInfoClick(event, props)} size="sm" className="mt-1" block="block" variant="info" value="More Info" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}

const mapStateToProps = state => {
  return {
    user: state.currentUser.user,
    userConcerts: state.userConcerts.userConcerts,
    concertIds: state.userConcerts.userConcerts.map(concert => concert.api_id)
  }
}

export default connect(mapStateToProps, { newConcert })(Concert);