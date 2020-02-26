import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Concert = (props) => {
  return (
    <Card>
      {/* <Card.Img variant="top" src={} /> */}
      <Card.Body>
        <Card.Title>{props.display}</Card.Title>
        <Card.Text>
          <strong>Date: </strong>{props.date} - {props.time}
        </Card.Text>
        <Card.Text>
          <strong>Venue: </strong>{props.venueName}
        </Card.Text>
        <Card.Text>
          <strong>Location: </strong>{props.location}
        </Card.Text>
        <Card.Text>
          <Link to={props.url}>Additional Event Info</Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        {/* This is where I'll likely add buttons for user to indicate they're going/interested */}
      </Card.Footer>
    </Card>
  )
}

export default Concert;