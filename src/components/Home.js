import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Card, Button, CardDeck } from 'react-bootstrap';
import concertImg from '../images/concert1.jpg'
import venueImg from '../images/venue1.jpg'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'

const Home = (props) => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/"><MDBIcon icon="guitar" /> Concert time!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={<MDBIcon icon="music" />} alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Upcoming Concerts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">My Concerts</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title={<MDBIcon icon="warehouse" />} alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">All Venues</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">My Venues</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title={<MDBIcon far icon="user-circle" />} alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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

export default Home;