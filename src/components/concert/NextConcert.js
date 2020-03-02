import React from 'react'
import { Col, Card, Row, Button } from 'react-bootstrap'
import BasicButton from '../input/BasicButton'

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
    endTime: props.concert.end ? props.concert.end.time : '',
    popularity: props.concert.popularity,
    venueName: props.concert.venue.displayName,
    location: props.concert.location.city,
    street: props.concert.venue.street,
    venueUrl: props.concert.venue.website ? props.concert.venue.website : props.concert.venue.uri,
    ageRestriction: props.concert.ageRestriction,
    venueDescription: props.concert.venue.description,
    venueCapacity: props.concert.venue.capacity
  }

  return (
    <>
    <Col xs={12} sm={12} md={12} lg={12}>
      
      <Card>
        <h5 className="text-center mt-2">Your Next Event: <strong>{params.displayName}</strong></h5>
        <Row className="justify-content-center">
          <Col className="text-center" style={{borderRight: "1px dashed blue"}} xs={6} sm={6} md={6} lg={6}>
            <Card.Body>
            <Card.Title className="mb-0">{params.headline.length !== 0 ? `Featuring: ${params.headline.map(artist => artist.displayName).join(' / ')}` : ''}</Card.Title>
              <Card.Text>
                <strong>{params.support.length !== 0 ? `w/ special guests: ${params.support.map(artist => artist.displayName).join(' / ')}` : ''}</strong>
              </Card.Text>
              <Card.Text>
                {params.date ? `Event starts on ${params.date.toLocaleDateString()}` : ''}{params.time ? ` @ ${params.time}` : ''}
                {params.eventType === 'Festival' ? ` and ends on ${params.endDate.toLocaleDateString()}` : ''}{params.endTime ? ` @ ${params.endTime}` : ''}
              </Card.Text>
              <Card.Text>
                Popularity: Add a star thingy?
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="text-center" xs={6} sm={6} md={6} lg={6}>
            <Card.Body>
            <Card.Title className="mb-0">{params.venueName}</Card.Title>
              <Card.Text>
                <strong>{params.venueDescription ? params.venueDescription : ''}</strong>
              </Card.Text>
              <Card.Text>
                {params.street ? `${params.street} - ` : ''}{params.location}
              </Card.Text>
              <Card.Text className="mb-0">
                {params.ageRestriction ? `Age Restriction: ${params.ageRestriction}` : 'Age Restriction: None'}
              </Card.Text>
              <Card.Text>
                {params.venueCapacity ? `Venue Capacity: ${params.venueCapacity}` : 'See additional venue info by clicking link below'}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer className="text-center">
          <BasicButton size="sm" style={{width: "20%"}} variant="primary" value="Concert Link" />
          <BasicButton size="sm" className="mx-3" style={{width: "20%"}} variant="secondary" value="Delete Concert" />
          <BasicButton size="sm" style={{width: "20%"}} variant="success" value="Venue Link" />       
        </Card.Footer>
      </Card>
    </Col>
    </>
  )
}

export default NextConcert;