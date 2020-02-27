export const NEW_CONCERT_REQUEST = 'NEW_CONCERT_REQUEST'
export const NEW_CONCERT_SUCCESS = 'NEW_CONCERT_SUCCESS'
export const NEW_CONCERT_FAILURE = 'NEW_CONCERT_FAILURE'

const requestNewConcert = (credentials) => {
  return {
    type: NEW_CONCERT_REQUEST,
    credentials
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

export const newConcert = (credentials, user) => {
  const concertData = {
    display: credentials.display,
    type: credentials.type,
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

  return dispatch => {
    dispatch(requestNewConcert(credentials))
    return fetch(`http://localhost:3000/api/v1/users/${user.id}/concerts`, config)
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(data => {
      if (data.success) {
        dispatch(receiveNewConcert(data.concert))
      } else {
        dispatch(newConcertError(data.failure))
      }
    }).catch(err => console.log("Error: ", err))
  }

}