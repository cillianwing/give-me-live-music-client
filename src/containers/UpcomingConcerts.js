import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import TopNav from '../components/nav/TopNav';
import { getConcerts } from '../actions/search';
import { Container, Card, CardDeck, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import BasicButton from '../components/input/BasicButton';

const UpcomingConcerts = (props) => {
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    return props.isLoading ? setModalShow(true) : setModalShow(false)
  })

  const handleNextClick = (event) => {
    event.preventDefault()
    props.getConcerts(props.searchFormData, props.page + 1)
  }

  const handlePreviousClick = (event) => {
    event.preventDefault()
  }

  return (
    <Container>
      <TopNav loggedIn={props.loggedIn} />
      <SearchForm />
      <LoadingSpinner show={modalShow} />
      <ButtonToolbar className="justify-content-center">
        <ButtonGroup style={{width: "10%"}}>
          {props.page > 1 ? <BasicButton size="sm" handleClick={handlePreviousClick} variant="primary" value="Previous" /> : props.page === 1 && props.isPulled ? <BasicButton size="sm" disabled="disabled" variant="primary" value="Previous" /> : ''}
        </ButtonGroup>
        <ButtonGroup style={{width: "10%"}}>
          {props.pages > props.page ? <BasicButton size="sm" handleClick={handleNextClick} variant="primary" value="Next" /> : ''}
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm,
    loggedIn: state.auth.isAuthenticated,
    isLoading: state.search.isLoading,
    isPulled: state.search.isPulled,
    page: state.search.page,
    pages: state.search.pages
  }
}

export default connect(mapStateToProps, { getConcerts })(UpcomingConcerts);