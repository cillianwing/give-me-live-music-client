import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const concertsButton = (props) => {
  return (
    <>
      <Button as={Link} to="/concerts/upcoming" style={{ width: "40%" }} className="mr-3" variant="primary">Search Concerts</Button>
      <Button as={Link} to="/user/concerts" style={{ width: "40%" }} className="ml-3" variant="primary">My Concerts</Button>
    </>
  )
}

export const venuesButton = (props) => {
  return (
    <>
      <Button as={Link} to="/venues" style={{ width: "40%" }} className="mr-3" variant="primary">Search Venues</Button>
      <Button as={Link} to="/user/venues" style={{ width: "40%" }} className="ml-3" variant="primary">My Venues</Button>
    </>
  )
}
