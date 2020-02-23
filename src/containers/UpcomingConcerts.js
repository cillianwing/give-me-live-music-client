import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import TopNav from '../components/nav/TopNav';
import { Container, Card, CardDeck } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import BasicButton from '../components/input/BasicButton';

const UpcomingConcerts = (props) => {

  const handleNextClick = (event) => {
    event.preventDefault()

  }

  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} />
      <SearchForm />
      {props.isLoading ? <LoadingSpinner /> : '' }
      {props.pages > props.page ? <div class="col text-center"><BasicButton size="sm" handleClick={handleNextClick} variant="primary" value="Next" /></div> : ''}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.isAuthenticated,
    isLoading: state.search.isLoading,
    page: state.search.page,
    pages: state.search.pages
  }
}

export default connect(mapStateToProps, null)(UpcomingConcerts);