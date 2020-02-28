import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const NextConcert = (props) => {
  const params = {
    url: props.concert.uri,
    eventType: props.concert.type,
    displayName: props.concert.displayName,
    headline: props.concert.performance.filter(artist => artist.billing === 'headline'),
    support: props.concert.performance.filter(artist => artist.billing === 'support'),
    date: props.concert.start.date ? new Date(props.concert.start.date) : '',
    time: props.concert.start.time,
    endDate: props.concert.end ? new Date(props.concert.end.date) : '',
    endTime: props.concert.end ? props.concert.end.time : ''
    // popularity: props.concert.popularity,
    // venueName: props.concert.venue.displayName,
    // location: props.concert.venue.location.city,
    // street: props.concert.venue.street,
    // venueUrl: props.concert.venue.uri,
    // ageRestriction: props.concert.ageRestriction,
    // venueDescription: props.concert.venue.description,
    // venueCapacity: props.concert.venue.capacity
  }

  return (
    <>
    <Col xs={12} sm={12} md={12} lg={12}>
      <h5 className="text-center mt-2">Your Next Concert: <strong>{params.displayName}</strong></h5>
      <Card>
        <Row className="justify-content-center">
          <Col className="text-center" style={{borderRight: "1px dashed blue"}} xs={6} sm={6} md={6} lg={6}>
            <Card.Body>
            <Card.Title>{props.concert.type} Details</Card.Title>
              <Card.Text>
                <p><span>{params.headline.length !== 0 ? `Headline: ${params.headline.map(artist => artist.displayName).join(' / ')}` : ''}</span>
                <span>{params.support.length !== 0 ? `  -  Support: ${params.support.map(artist => artist.displayName).join(' / ')}` : ''}</span></p>
              </Card.Text>
              <Card.Text>
                <p>{params.date ? `Event starts on ${params.date.toLocaleDateString()}` : ''}{params.time ? ` @ ${params.time}` : ''}
                {params.eventType === 'Festival' ? ` and ends on ${params.endDate.toLocaleDateString()}` : ''}{params.endTime ? ` @ ${params.endTime}` : ''}</p>
              </Card.Text>
              <Card.Text>
                <p>Popularity: Add a star thingy?</p>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="text-center" xs={6} sm={6} md={6} lg={6}>
            <Card.Body>
            <Card.Title>Venue Details</Card.Title>
              <Card.Text>
                Loading next concert venue details.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
    </>
  )
}

export default NextConcert;