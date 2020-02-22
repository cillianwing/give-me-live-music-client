import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap';

const loadingSpinner = (props) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Spinner animation="border" variant="info" />
        </Col>
      </Row>
    </>
  )
}

export default loadingSpinner;