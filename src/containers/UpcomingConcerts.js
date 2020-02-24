import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { getConcerts } from '../actions/search';
import { logoutUser } from '../actions/currentUser';
import { CardDeck, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import BasicButton from '../components/input/BasicButton';
import Concert from '../components/Concert';
import TopNav from '../components/nav/TopNav';

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
    props.getConcerts(props.searchFormData, props.page - 1)
  }

  const handleLogout = (event) => {
    event.preventDefault()
    props.logoutUser()
  }

  const concertCards = () => {
    const concertsArr = props.concerts.map(concert => (
      <Concert key={concert.id}
        imgUrl={concert.image} 
        title={concert.title} 
        date={concert.start_time.split(' ')[0]} 
        time={concert.start_time.split(' ')[1]} 
        venueName={concert.venue_name}
        city={concert.city_name}
        state={concert.region_name}
        country={concert.country_abbr}
        url={concert.url}
        />
      )
    )
    const arr = []
    while (concertsArr.length > 0) {
      arr.push(concertsArr.splice(0, 3))
    }
    return arr
  }

  const allConcerts = concertCards().map((concertGroup, index) => (
    <CardDeck className="my-2" key={index}>
      {concertGroup}
    </CardDeck>
  ))

  return (
    <>
    <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
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
    {allConcerts}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm,
    loggedIn: state.auth.isAuthenticated,
    isLoading: state.search.isLoading,
    isPulled: state.search.isPulled,
    page: state.search.page,
    pages: state.search.pages,
    concerts: state.search.concerts
  }
}

export default connect(mapStateToProps, { getConcerts, logoutUser })(UpcomingConcerts);