import React from 'react'
import { connect } from 'react-redux';
import TopNav from './TopNav';
import { Container, Card, Button, CardDeck } from 'react-bootstrap';
import concertImg from '../images/concert1.jpg'
import venueImg from '../images/venue1.jpg'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'

const Home = (props) => {
  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} />
      <CardDeck>
        <Card className="text-center mt-5">
          <Card.Img style={{ height: "60%" }} variant="top" src={concertImg} />
          <Card.Body>
            <Card.Title><MDBIcon icon="music" /> Concerts</Card.Title>
            <Card.Text>
              Search for upcoming concerts in your area and add ones you're interested in to your calendar!
            </Card.Text>
            <Button as={Link} to="/concerts/search" style={{ width: "200px" }} className="mr-3" variant="primary">Search Concerts</Button>
            <Button as={Link} to="/user/concerts" style={{ width: "200px" }} className="ml-3" variant="primary">My Concerts</Button>
          </Card.Body>
        </Card>      
        <Card className="text-center mt-5">
          <Card.Img style={{ height: "60%" }} variant="top" src={venueImg} />
          <Card.Body>
            <Card.Title><MDBIcon icon="warehouse" /> Venues</Card.Title>
            <Card.Text>
              Find and follow your favorite concert venues to ensure you never miss a show again!
            </Card.Text>
            <Button as={Link} to="/venues" style={{ width: "200px" }} className="mr-3" variant="primary">Search Venues</Button>
            <Button as={Link} to="/user/venues" style={{ width: "200px" }} className="ml-3" variant="primary">My Venues</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(Home);