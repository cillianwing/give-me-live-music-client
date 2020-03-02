import React from 'react'
import { Col, Card, Row, ProgressBar, Button } from 'react-bootstrap'
import BasicButton from '../input/BasicButton'

const NextConcert = (props) => {
  const params = {
    apiId: props.concert.id,
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
    venueCapacity: props.concert.venue.capacity,
    venuePhone: props.concert.venue.phone
  }

  const handleDelete = (event, concert) => {
    event.preventDefault()
    // call to backend to delete the concert from user's concerts
  }

  return (
    <>
    <Col xs={12} sm={12} md={12} lg={12}>
      
      <Card>
        <h5 className="text-center mt-2">Your Next Event: <strong>{params.displayName}</strong></h5>
        <Row className="justify-content-center">
          <Col className="text-center" xs={12} sm={12} md={12} lg={6}>
            <Card.Body>
            <Card.Title className="mb-0">{params.headline.length !== 0 ? `Featuring: ${params.headline.map(artist => artist.displayName).join(' / ')}` : ''}</Card.Title>
              <Card.Text>
                <strong>{params.support.length !== 0 ? `w/ special guests: ${params.support.map(artist => artist.displayName).join(' / ')}` : ''}</strong>
              </Card.Text>
              <Card.Text>
                {params.date ? `${params.eventType} starts on ${params.date.toLocaleDateString()}` : ''}{params.time ? ` @ ${params.time}` : ''}
                {params.eventType === 'Festival' ? ` and ends on ${params.endDate.toLocaleDateString()}` : ''}{params.endTime ? ` @ ${params.endTime}` : ''}
              </Card.Text>
              <Card.Text className="mb-0">
                Popularity: {Math.round((params.popularity * 1000)*2)/2} / 10
              </Card.Text>
              {params.popularity ? <ProgressBar className="mx-auto" style={{width: "50%"}} now={params.popularity * 10000} variant="success" /> : ''}
            </Card.Body>
          </Col>
          <Col className="text-center" xs={12} sm={12} md={12} lg={6}>
            <Card.Body>
            <Card.Title className="mb-0">Venue: {params.venueName}</Card.Title>
              <Card.Text>
                <strong>{params.venueDescription ? params.venueDescription : ''}</strong>
              </Card.Text>
              <Card.Text>
                {params.street ? `${params.street} - ` : ''}{params.location}<br />{params.venuePhone ? `Phone: ${params.venuePhone}` : ''}
              </Card.Text>
              <Card.Text className="mb-0">
                {params.ageRestriction && params.venueCapacity ? 
                  `Age Restriction: ${params.ageRestriction}  |  Venue Capacity: ${params.venueCapacity}` : 
                  params.ageRestriction ? `Age Restriction: ${params.ageRestriction}` : 
                  params.venueCapacity ? `Venue Capacity: ${params.venueCapacity}` : 'See additional venue info by clicking link below'}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Card.Footer className="justify-content-center">
          <Row className="text-center">
            <Col className="my-1" sm={{span: 12, order: 1}} md={{span: 12, order: 1}} lg={{span: 4, order: 1}}>
              <Button block href={params.url} target="_blank" size="sm" variant="primary">Concert Link</Button>
            </Col>
            <Col className="my-1" sm={{span: 12, order: 3}} md={{span: 12, order: 3}} lg={{span: 4, order: 2}}>
              <BasicButton block="block" size="sm" variant="secondary" handleClick={event => handleDelete(event, params.apiId)} value="Delete Concert" />
            </Col>
            <Col className="my-1" sm={{span: 12, order: 2}} md={{span: 12, order: 2}} lg={{span: 4, order: 3}}>
              <Button block href={params.venueUrl} target="_blank" size="sm" variant="success">Venue Link</Button> 
            </Col>
          </Row>      
        </Card.Footer>
      </Card>
    </Col>
    </>
  )
}

export default NextConcert;