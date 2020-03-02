import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/nav/TopNav';
import NextConcert from '../components/concert/NextConcert';
import LoadingSpinner from '../components/LoadingSpinner';
import { logoutUser } from '../actions/currentUser';
import { getConcertDetailed } from '../actions/userConcerts';
import { Container, Col, CardDeck, Card, Row, Nav } from 'react-bootstrap';

const UserConcerts = (props) => {
  const [key, setKey] = useState('basic')
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    return props.isLoading ? setModalShow(true) : setModalShow(false)
  }, [props.isLoading])

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
    props.history.push('/')
  }

  const handleSelect = (k) => {
    setKey(k)
  }

  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
      <LoadingSpinner show={modalShow} />
      <Row className="my-3">
      {props.detailPulled && props.concertsDetailed.length > 0 ? <NextConcert concert={props.concertsDetailed[0]} /> : '' }
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8}>
          <h3 className="text-center mt-2">User's Concerts Info</h3>
          <Nav
            className="justify-content-center"
            variant="pills"
            defaultActiveKey="basic"
            activeKey={key}
            onSelect={k => handleSelect(k)}
          >
            <Nav.Item className="text-center" style={{ width: "30%" }}>
              <Nav.Link eventKey="basic">Basic View</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center" style={{ width: "30%" }}>
              <Nav.Link eventKey="detailed">Detailed View</Nav.Link>
            </Nav.Item>
          </Nav>
          <CardDeck className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>Left Column Card 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Left Column Card 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          <CardDeck className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>Left Column Card 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Left Column Card 4</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <h3 className="text-center mt-2">Playlists/Something</h3>
          <CardDeck className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>Right Column Card</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.isAuthenticated,
    userConcerts: state.userConcerts.userConcerts,
    isLoading: state.userConcerts.isLoading,
    isPulled: state.userConcerts.isPulled,
    detailPulled: state.userConcerts.detailPulled,
    concertsDetailed: state.userConcerts.concertsDetailed
  }
}

export default connect(mapStateToProps, { logoutUser, getConcertDetailed })(UserConcerts);