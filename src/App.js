import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* all Route components listed here */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
