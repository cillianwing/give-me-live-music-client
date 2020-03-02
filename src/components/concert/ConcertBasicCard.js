import React, { useState } from 'react'
import { Col, Card, Row, Button } from 'react-bootstrap'
import BasicButton from '../input/BasicButton';

const ConcertBasicCard = (props) => {

  const params = {
    apiId: props.concert.id,
    url: props.concert.uri,
    headline: props.concert.performance.filter(artist => artist.billing === 'headline'),
    support: props.concert.performance.filter(artist => artist.billing === 'support'),
    date: props.concert.start.date ? new Date(props.concert.start.date) : '',
    time: props.concert.start.time,
    venueName: props.concert.venue.displayName,
    location: props.concert.location.city
  }

  return (
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card className="my-1">
        <Card.Body style={{height: "150px", overflow: "auto"}}>
          {params.support.length !== 0 ? 
            <Card.Title className="mb-0">{params.headline.length !== 0 ? `${params.headline.map(artist => artist.displayName).join(' / ')}` : ''}</Card.Title> : 
            <Card.Title>{params.headline.length !== 0 ? `${params.headline.map(artist => artist.displayName).join(' / ')}` : ''}</Card.Title> }
          <Card.Text>
            <strong>{params.support.length !== 0 ? `w/ ${params.support.map(artist => artist.displayName).join(' / ')}` : ''}</strong>
          </Card.Text>
          <Card.Text>
            {`${params.venueName} in ${params.location} on ${params.date.toLocaleDateString()}`}{params.time ? ` @ ${params.time}` : ''}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="text-center">
            <Col className="my-1" sm={12} md={12} lg={6}>
              <Button block href={params.url} target="_blank" size="sm" variant="primary">Info</Button>
            </Col>
            <Col className="my-1" sm={12} md={12} lg={6}>
              <BasicButton block="block" size="sm" variant="secondary" handleClick={props.handleDelete} value="Delete" />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default ConcertBasicCard;