import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Container, Col, CardDeck, Card, Row, Nav } from 'react-bootstrap'
import TopNav from '../components/nav/TopNav'

const UserConcerts = (props) => {
  const [key, setKey] = useState('basic')

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
  }

  const handleSelect = (k) => {
    setKey(k)
  }

  return (
    // <Container>
    //   <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
    //   <Col className="my-4" style={{borderRight: "1px solid black"}} lg={8}>
    //     <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
    //       <Tab eventKey="general" title="General Concert Info">
    //         <TabPane>
    //           1
    //         </TabPane>
    //       </Tab>
    //       <Tab eventKey="detailed" title="Detailed Concert Info">
    //         2
    //       </Tab>
    //     </Tabs>
    //   </Col>
    // </Container>
    <Container>
      <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
      <Row className="my-3">
        <Col xs={12} sm={12} md={12} lg={12}>
          <h3 className="text-center mt-2">Next Concert</h3>
          <Card>
            <Card.Body>
              <Card.Title>Top Row Next Concert</Card.Title>
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
        </Col>
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
            <Nav.Item className="text-center" style={{ width: "200px" }}>
              <Nav.Link eventKey="basic">Basic View</Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center" style={{ width: "200px" }}>
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
    loggedIn: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(UserConcerts);