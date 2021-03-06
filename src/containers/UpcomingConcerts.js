import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { getConcerts } from '../actions/search';
import { logoutUser } from '../actions/currentUser';
import { CardDeck, ButtonToolbar, ButtonGroup, Dropdown } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import BasicButton from '../components/input/BasicButton';
import SearchedConcert from '../components/concert/SearchedConcert';
import TopNav from '../components/nav/TopNav';

const UpcomingConcerts = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const [sortType, setSortType] = useState('default')

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
    props.history.push('/')
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

  const sortedByVenueCards = () => {
    const unsortedConcerts = [...props.concerts]
    const sortedByVenue = unsortedConcerts.sort((a, b) => {
      const venueA = a.venue.displayName.toUpperCase()
      const venueB = b.venue.displayName.toUpperCase()
      return venueA < venueB ? -1 : venueA > venueB ? 1 : 0
    })
    return sortedByVenue
  }

  const sortedByDisplayCards = () => {
    const unsortedConcerts = [...props.concerts]
    const sortedByDisplay = unsortedConcerts.sort((a, b) => {
      const displayA = a.displayName.toUpperCase()
      const displayB = b.displayName.toUpperCase()
      return displayA < displayB ? -1 : displayA > displayB ? 1 : 0
    })
    return sortedByDisplay
  }

  const concertCards = () => {
    let sortedArray = []
    if (sortType === 'default') {
      sortedArray = props.concerts
    } else if (sortType === 'display') {
      sortedArray = sortedByDisplayCards()
    } else if (sortType === 'venue') {
      sortedArray = sortedByVenueCards()
    }

    console.log(sortedArray)
    console.log(sortType)

    return sortedArray.map(concert =>
      <SearchedConcert key={concert.id}
        eventType={concert.type}
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
        apiId={concert.id}
        status={concert.status}
        />
    )

  }
  


  return (
    <>
    <TopNav loggedIn={props.loggedIn} handleLogout={handleLogout} />
    <SearchForm />
    <LoadingSpinner show={modalShow} text="Loading concerts...please wait!" />
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setSortType("display")}>Display Name</Dropdown.Item>
        <Dropdown.Item onClick={() => setSortType("venue")}>Venue Name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <ButtonToolbar className="justify-content-center">
      <ButtonGroup>
        {props.page > 1 ? <BasicButton size="sm" handleClick={handlePreviousClick} variant="primary" value="Previous" /> : props.page === 1 && props.isPulled ? <BasicButton size="sm" disabled="disabled" variant="primary" value="Previous" /> : ''}
      </ButtonGroup>
      <ButtonGroup>
        {props.pages > props.page ? <BasicButton size="sm" handleClick={handleNextClick} variant="primary" value="Next" /> : props.page >= props.pages && props.pages !== null ? <BasicButton size="sm" variant="primary" value="Next" disabled="disabled" /> : ''}
      </ButtonGroup>
    </ButtonToolbar>
    {props.concerts.length !== 0 ? concertCards() : '' }
    <ButtonToolbar className="justify-content-center">
      <ButtonGroup>
        {props.page > 1 ? <BasicButton size="sm" handleClick={handlePreviousClick} variant="primary" value="Previous" /> : props.page === 1 && props.isPulled ? <BasicButton size="sm" disabled="disabled" variant="primary" value="Previous" /> : ''}
      </ButtonGroup>
      <ButtonGroup>
        {props.pages > props.page ? <BasicButton size="sm" handleClick={handleNextClick} variant="primary" value="Next" /> : props.page >= props.pages && props.pages !== null ? <BasicButton size="sm" variant="primary" value="Next" disabled="disabled" /> : ''}
      </ButtonGroup>
    </ButtonToolbar>
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
    concerts: state.search.concerts // naming probably needs updating
  }
}

export default connect(mapStateToProps, { getConcerts, logoutUser })(UpcomingConcerts);