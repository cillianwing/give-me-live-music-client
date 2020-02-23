import React from 'react'
import { Row, Col, Spinner, Modal } from 'react-bootstrap';

const LoadingSpinner = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Spinner animation="border" variant="info" />
            </Col>
            <Col className="mt-2" md="auto">
              <p>Loading your concerts search!</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoadingSpinner;