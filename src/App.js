import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import { logoutUser } from './actions/auth'

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {props.auth.isAuthenticated ? props.logoutUser() && <Signup /> : <Signup />} */}
          <Login />
          {/* all Route components listed here */}
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
