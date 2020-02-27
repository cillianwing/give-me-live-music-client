import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import TopNav from '../components/nav/TopNav';
import { concertsButton, venuesButton } from './input/HomeButtonLoggedIn';
import HomeButtonLoggedOut from './input/HomeButtonLoggedOut';
import BasicButton from './input/BasicButton';
import { logoutUser } from '../actions/currentUser';
import { Col, Card, CardDeck } from 'react-bootstrap';
import concertImg from '../images/concert1.jpg'
import venueImg from '../images/venue1.jpg'
import { MDBIcon } from 'mdbreact'

const Home = (props) => {
  const [windowWidth, setWindowWidth] = useState('')
  const [windowHeight, setWindowHeight] = useState('')

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  })

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
  }

  return (
    <>
      <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
      <CardDeck>
        <Col sm={12} md={6} lg={6}>
          <Card className="text-center mt-5" >
            <Card.Img style={{ height: `${windowWidth / 5}px` }} variant="top" src={concertImg} />
            <Card.Body>
              <Card.Title><MDBIcon icon="music" /> Concerts</Card.Title>
              <Card.Text>
                Search for upcoming concerts in your area and add ones you're interested in to your calendar!
              </Card.Text>
                {props.loggedIn ? concertsButton() : <HomeButtonLoggedOut />}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card className="text-center mt-5" style={{ height: `${windowWidth}`}}>
            <Card.Img style={{ height: `${windowWidth / 5}px` }} variant="top" src={venueImg} />
            <Card.Body>
              <Card.Title><MDBIcon icon="warehouse" /> Venues</Card.Title>
              <Card.Text>
                Find and follow your favorite concert venues to ensure you never miss a show again!
              </Card.Text>
              {/* {props.loggedIn ? venuesButton() : <HomeButtonLoggedOut />} */}
              <BasicButton disabled="disabled" style={{ width: "90%" }} className="mx-auto" variant="warning" value="Under Development!" />
            </Card.Body>
          </Card>
        </Col>
      </CardDeck>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps, { logoutUser })(Home);