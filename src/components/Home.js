import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Card, Button, CardDeck } from 'react-bootstrap';

const Home = (props) => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><i class="fas fa-guitar"></i> Concert time! <i class="fas fa-drum"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Concerts" alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Upcoming Concerts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">My Concerts</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Venues" alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">All Venues</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">My Venues</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="User" alignRight id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <CardDeck>
        <Card className="text-center mt-5">
          <Card.Img variant="top" src="logo512.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="mr-5" variant="primary">Go somewhere</Button>
            <Button className="ml-5" variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>      
        <Card className="text-center mt-5">
          <Card.Img variant="top" src="logo512.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="mr-5" variant="primary">Go somewhere</Button>
            <Button className="ml-5" variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default Home;