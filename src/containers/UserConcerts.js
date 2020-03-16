import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TopNav from '../components/nav/TopNav';
import NextConcert from '../components/concert/NextConcert';
import ConcertBasicCard from '../components/concert/ConcertBasicCard';
import ConcertDetailCard from '../components/concert/ConcertDetailCard';
import './userConcerts.css';
import { logoutUser } from '../actions/currentUser';
import { getConcertDetailed } from '../actions/userConcerts';
import { deleteUserConcert } from '.././actions/userConcerts';
import { Container, Col, CardDeck, Card, Row, Nav, Spinner } from 'react-bootstrap';

const UserConcerts = (props) => {
  const [key, setKey] = useState('basic')

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
    props.history.push('/')
  }

  const handleSelect = (k) => {
    setKey(k)
  }

  const basicConcertCards = () => {
    if (props.detailPulled && props.concertsDetailed.length > 0 && props.userConcerts.length === props.concertsDetailed.length) {
      const upcoming = props.concertsDetailed.slice(1)
      return upcoming.length > 0 ? 
        upcoming.map(concert => <ConcertBasicCard handleDelete={event => handleDelete(event, findUserConcert(concert))} key={concert.id} concert={concert} />) :
        <Col className="text-center mt-3"><h4>No upcoming concerts - <Link to='/concerts/upcoming'>search</Link> and add more now!</h4></Col>
    } else {
      return ''
    }
  }

  const detailConcertCards = () => {
    if (props.detailPulled && props.concertsDetailed.length > 0 && props.userConcerts.length === props.concertsDetailed.length) {
      const upcoming = props.concertsDetailed.slice(1)
      return upcoming.length > 0 ? 
      upcoming.map(concert => <ConcertDetailCard handleDelete={event => handleDelete(event, findUserConcert(concert))} key={concert.id} concert={concert} />) : 
        <Col className="text-center mt-3"><h4>No upcoming concerts - <Link to='/concerts/upcoming'>search</Link> and add more now!</h4></Col>
    } else {
      return ''
    }
  }

  const handleDelete = (event, concert) => {
    event.preventDefault()
    props.deleteUserConcert(concert, props.user)
  }

  const findUserConcert = (concert) => {
    const userConcert = props.userConcerts.filter(el => el.api_id === concert.id)
    return userConcert
  }

  const nextConcert = () => {
    return props.detailPulled && props.concertsDetailed.length > 0 && props.userConcerts.length === props.concertsDetailed.length ? 
      <NextConcert handleDelete={event => handleDelete(event, findUserConcert(props.concertsDetailed[0]))} concert={props.concertsDetailed[0]} /> : 
      props.detailPulled && props.userConcerts.length === props.concertsDetailed.length && props.concertDetailed.length === 0 ?
      <Col className="text-center mt-3"><h4>You do not have any concert upcoming!</h4></Col> : 
      ''
  }

  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
      <Row className="my-3">
      {nextConcert() ? nextConcert() : <Col className="text-center mt-3"><h5>Next Upcoming Event</h5><h4><Spinner animation="grow" variant="info" /></h4></Col> }
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8}>
          <h3 className="text-center mt-2">User's Concerts Info</h3>
          <Nav
            className="justify-content-center nav-pills"
            variant="pills"
            defaultActiveKey="basic"
            activeKey={key}
            onSelect={k => handleSelect(k)}
          >
            <Nav.Item className="text-center mr-1 nav-pill">
              <Nav.Link eventKey="basic">Basic Info</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center ml-1 nav-pill">
              <Nav.Link eventKey="detailed">Detailed Info</Nav.Link>
            </Nav.Item>
          </Nav>
          <Row className="text-center mt-2">
            {key === 'basic' && basicConcertCards() ? basicConcertCards() : 
              key === 'basic' && !basicConcertCards() ? <Col className="text-center mt-3"><h5>Loading...<Spinner animation="grow" variant="info" /></h5></Col> :
              key === 'detailed' && detailConcertCards() ? detailConcertCards() : 
              <Col className="text-center mt-3"><h5>Loading...<Spinner animation="grow" variant="info" /></h5></Col> }
          </Row>
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
    user: state.currentUser.user,
    userConcerts: state.userConcerts.userConcerts,
    isLoading: state.userConcerts.isLoading,
    isPulled: state.userConcerts.isPulled,
    detailPulled: state.userConcerts.detailPulled,
    concertsDetailed: state.userConcerts.concertsDetailed,
    concertDeleted: state.userConcerts.concertDeleted
  }
}

export default connect(mapStateToProps, { logoutUser, getConcertDetailed, deleteUserConcert })(UserConcerts);