export const NEW_CONCERT_REQUEST = 'NEW_CONCERT_REQUEST'
export const NEW_CONCERT_SUCCESS = 'NEW_CONCERT_SUCCESS'
export const NEW_CONCERT_FAILURE = 'NEW_CONCERT_FAILURE'
export const USER_CONCERTS_REQUEST = 'USER_CONCERTS_REQUEST'
export const USER_CONCERTS_SUCCESS = 'USER_CONCERTS_SUCCESS'
export const USER_CONCERTS_FAILURE = 'USER_CONCERTS_FAILURE'
export const CONCERT_DETAILED_REQUEST = 'CONCERT_DETAILED_REQUEST'
export const CONCERT_DETAILED_SUCCESS = 'CONCERT_DETAILED_SUCCESS'
export const CONCERT_DETAILED_FAILURE = 'CONCERT_DETAILED_FAILURE'
export const DETAIL_PULLED = 'DETAIL_PULLED'
export const CONCERT_DELETE_REQUEST = 'CONCERT_DELETE_REQUEST'
export const CONCERT_DELETE_SUCCESS = 'CONCERT_DELETE_SUCCESS'
export const CONCERT_DELETE_FAILURE = 'CONCERT_DELETE_FAILURE'
export const CLEAR_DETAILED_CONCERTS = 'CLEAR_DETAILED_CONCERTS'

const requestNewConcert = () => {
  return {
    type: NEW_CONCERT_REQUEST,
  }
}

const receiveNewConcert = (concert) => {
  return {
    type: NEW_CONCERT_SUCCESS,
    concert
  }
}

const newConcertError = (message) => {
  return {
    type: NEW_CONCERT_FAILURE,
    message
  }
}

const requestAllConcerts = () => {
  return {
    type: USER_CONCERTS_REQUEST
  }
}

const receiveAllConcerts = (concerts) => {
  return {
    type: USER_CONCERTS_SUCCESS,
    concerts
  }
}

const allConcertsError = (message) => {
  return {
    type: USER_CONCERTS_FAILURE,
    message
  }
}

const requestConcertDetailed = () => {
  return {
    type: CONCERT_DETAILED_REQUEST
  }
}

const receiveConcertDetailed = (concert) => {
  return {
    type: CONCERT_DETAILED_SUCCESS,
    concert
  }
}

const concertDetailedError = (message) => {
  return {
    type: CONCERT_DETAILED_FAILURE,
    message
  }
}

const setDetailPulled = () => {
  return {
    type: DETAIL_PULLED
  }
}

const requestConcertDelete = () => {
  return {
    type: CONCERT_DETAILED_REQUEST
  }
}

const receiveConcertDelete = (concert, message) => {
  return {
    type: CONCERT_DELETE_SUCCESS,
    concert,
    message
  }
}

const concertDeleteError = (message) => {
  return {
    type: CONCERT_DELETE_FAILURE,
    message
  }
}

const clearDetailedConcerts = () => {
  return {
    type: CLEAR_DETAILED_CONCERTS
  }
}

export const newConcert = (credentials, user) => {
  const concertData = {
    display: credentials.display,
    event_type: credentials.eventType,
    url: credentials.url,
    venue_id: credentials.venueId,
    venue_name: credentials.venueName,
    date: credentials.date,
    time: credentials.time,
    headline: credentials.headline,
    support: credentials.support,
    city: credentials.city,
    state: credentials.region,
    api_id: credentials.apiId
  }

  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({concert: concertData})
  }
  console.log('b')
  return dispatch => {
    console.log('c')
    dispatch(requestNewConcert(credentials))
    return fetch(`http://localhost:3000/api/v1/users/${user.id}/concerts`, config)
    .then(res => res.json())
    .then(data => {
      console.log('d')
      if (data.success) {
        dispatch(receiveNewConcert(data.concert))
        dispatch(getConcertDetailed([data.concert]))
      } else {
        dispatch(newConcertError(data.failure))
      }
    }).catch(err => console.log("Error: ", err))
  }
  console.log('e')
}

export const getUserConcerts = (user) => {

  const config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
  }

  return dispatch => {
    dispatch(requestAllConcerts())
    return fetch(`http://localhost:3000/api/v1/users/${user.id}/concerts`, config)
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(data => {
      if (data.success) {
        dispatch(receiveAllConcerts(data.concerts))
        dispatch(clearDetailedConcerts())
        dispatch(getConcertDetailed(data.concerts))
      } else {
        dispatch(allConcertsError(data.failure))
      }
    }).catch(err => console.log("Error: ", err))
  }

}

export const getConcertDetailed = (concerts) => {

    return dispatch => {
      for (let i = 0; i < concerts.length; i++) {
        dispatch(requestConcertDetailed())
        fetch('http://localhost:3000/api/v1/concerts/details', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({concert: concerts[i].api_id})
        })
          .then(res => res.json().then(concert => ({
            status: res.status,
            concert
          })
        ))
        .then(({ status, concert }) => {
          if (status >= 400) {
            dispatch(concertDetailedError(concert.message))
          } else {
            dispatch(receiveConcertDetailed(concert))
          }
        }).catch(err => console.log("Errors: ", err))
      }
      dispatch(setDetailPulled())
    }
}

export const deleteUserConcert = (concert, user) => {

  const config = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({concert: concert[0]})
  }

  return dispatch => {
    dispatch(requestConcertDelete())
    return fetch(`http://localhost:3000/api/v1/users/${user.id}/concerts/${concert[0].id}`, config)
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(data => {
      if (data.success) {
        dispatch(receiveConcertDelete(concert, data.success))
        dispatch(getUserConcerts(user))
      } else {
        dispatch(concertDeleteError(data.failure))
      }
    }).catch(err => console.log("Error: ", err))
  }

}