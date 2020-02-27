import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Container, Col, Tabs, Tab, TabPane } from 'react-bootstrap'
import TopNav from '../components/nav/TopNav'

const UserConcerts = (props) => {
  const [key, setKey] = useState('general')

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
  }

  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
      <Col className="my-4" lg={8}>
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
          <Tab eventKey="general" title="General Concert Info">
            <TabPane>
              1
            </TabPane>
          </Tab>
          <Tab eventKey="detailed" title="Detailed Concert Info">
            2
          </Tab>
        </Tabs>
      </Col>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(UserConcerts);