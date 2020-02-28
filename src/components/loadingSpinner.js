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
            <Col className="mt-2 text-center" xs={12} md="auto">
              <Spinner animation="border" variant="info" />
            </Col>
            <Col className="mt-2 mb-0 text-center" xs={12} md="auto">
              <strong><p>Loading concerts...please wait!</p></strong>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoadingSpinner;