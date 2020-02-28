import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UpcomingConcerts from './containers/UpcomingConcerts'
import UserConcerts from './containers/UserConcerts'
import { getCurrentUser, logoutUser } from './actions/currentUser'
import { Container } from 'react-bootstrap'

function App(props) {

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      props.getCurrentUser()
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Container>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            {/* <Route path='/user/profile' component={UserProfile} /> */}
            <Route exact path='/user/concerts' component={UserConcerts} />
            <Route exact path='/concerts/upcoming' component={UpcomingConcerts} />
            {/* <Route path='/venues' component={Venues} /> */}
            {/* <Route path='user/venues' component={UserVenues} /> */}
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.isAuthenticated,
  }
}

export default connect(mapStateToProps, { getCurrentUser, logoutUser })(App);
