import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UpcomingConcerts from './containers/UpcomingConcerts'
import { logoutUser } from './actions/auth'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {props.auth.isAuthenticated ? props.logoutUser() && <Signup /> : <Signup />} */}
          {/* <Login /> */}
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          {/* <Route path='/user/profile' component={UserProfile} /> */}
          {/* <Route path='user/concerts' component={UserConcerts} /> */}
          <Route path='/concerts/search' component={UpcomingConcerts} />
          {/* <Route path='/venues' component={Venues} /> */}
          {/* <Route path='user/venues' component={UserVenues} /> */}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(App);
