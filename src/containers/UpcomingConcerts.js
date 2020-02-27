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

  const headliners = (concert) => {
    const headlinerObj = concert.performance.filter(performer => performer.billing === 'headline')
    const headlinerArr = headlinerObj.map(artist => artist.displayName)
    return headlinerArr
  }

  const support = (concert) => {
    const supportObj = concert.performance.filter(performer => performer.billing === 'support')
    const supportArr = supportObj.map(artist => artist.displayName)
    return supportArr
  }

  const city = (concert) => {
    return concert.location.city.split(', ')[0]
  }

  const region = (concert) => {
    return concert.location.city.split(', ')[1]
  }

  const concertCards = props.concerts.map(concert => (
      <Concert key={concert.id}
        type={concert.type}
        display={concert.displayName} 
        date={concert.start.date} 
        time={concert.start.time} 
        venueId={concert.venue.id}
        venueName={concert.venue.displayName}
        headline={headliners(concert)}
        support={support(concert)}
        location={concert.location.city}
        city={city(concert)}
        region={region(concert)}
        url={concert.uri}
        />
      )
    )

  return (
    <>
    <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
    <SearchForm />
    <LoadingSpinner show={modalShow} />
    <ButtonToolbar className="justify-content-center">
      <ButtonGroup>
        {props.page > 1 ? <BasicButton size="sm" handleClick={handlePreviousClick} variant="primary" value="Previous" /> : props.page === 1 && props.isPulled ? <BasicButton size="sm" disabled="disabled" variant="primary" value="Previous" /> : ''}
      </ButtonGroup>
      <ButtonGroup>
        {props.pages > props.page ? <BasicButton size="sm" handleClick={handleNextClick} variant="primary" value="Next" /> : props.page >= props.pages && props.pages !== null ? <BasicButton size="sm" variant="primary" value="Next" disabled="disabled" /> : ''}
      </ButtonGroup>
    </ButtonToolbar>
    {concertCards}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm,
    loggedIn: state.currentUser.isAuthenticated,
    isLoading: state.search.isLoading,
    isPulled: state.search.isPulled,
    page: state.search.page,
    pages: state.search.pages,
    concerts: state.search.concerts
  }
}

export default connect(mapStateToProps, { getConcerts, logoutUser })(UpcomingConcerts);