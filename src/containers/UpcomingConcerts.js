import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import TopNav from '../components/nav/TopNav';
import { Container, Card, CardDeck } from 'react-bootstrap';
import loadingSpinner from '../components/loadingSpinner';

const UpcomingConcerts = (props) => {
  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} />
      <SearchForm />
      {props.isLoading ? loadingSpinner() : '' }
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.isAuthenticated,
    isLoading: state.search.isLoading
  }
}

export default connect(mapStateToProps, null)(UpcomingConcerts);