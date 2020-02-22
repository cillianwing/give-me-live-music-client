import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HomeButtonLoggedOut = (props) => {
  return (
    <>
      <Button as={Link} to="/login" style={{ width: "90%" }} className="mx-auto" variant="primary">Login to get searching!</Button>
    </>
  )
}

export default HomeButtonLoggedOut;
