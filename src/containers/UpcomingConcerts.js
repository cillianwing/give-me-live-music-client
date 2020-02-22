import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import TopNav from '../components/nav/TopNav';
import { Container, Card, CardDeck } from 'react-bootstrap';

const UpcomingConcerts = (props) => {
  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} />
      <SearchForm />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(UpcomingConcerts);