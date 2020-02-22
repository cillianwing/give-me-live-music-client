export const CONCERTS_REQUEST = 'CONCERTS_REQUEST'
export const CONCERTS_SUCCESS = 'CONCERTS_SUCCESS'
export const CONCERTS_FAILURE = 'CONCERTS_FAILURE'

const requestConcerts = (credentials) => {
  return {
    type: CONCERTS_REQUEST,
    isLoading: true,
    isPulled: false,
    credentials
  }
}

const receiveConcerts = (concerts) => {
  return {
    type: CONCERTS_SUCCESS,
    isLoading: false,
    isPulled: true,
    concerts
  }
}

const concertsError = (message) => {
  return {
    type: CONCERTS_FAILURE,
    isLoading: false,
    isPulled: false,
    message
  }
}

export const getConcerts = (credentials) => {
  const location = !!credentials.location ? credentials.location : ''
  const startDate =  !!credentials.startDate ? credentials.startDate : ''
  const endDate = !!credentials.endDate ? credentials.endDate : ''
  const within = !!credentials.within ? credentials.within : ''
  const startMonth = startDate.getMonth() <= 11 ? "0" + (startDate.getMonth() + 1) : 1
  const endMonth = endDate.getMonth() <= 11 ? "0" + (endDate.getMonth() + 1) : 1
  const startDay = "0" + startDate.getDate()
  const endDay = "0" + endDate.getDate()
  const dateString = `${startDate.getFullYear()}${startMonth.slice(-2)}${startDay.slice(-2)}-${endDate.getFullYear()}${endMonth.slice(-2)}${endDay.slice(-2)}`
  
  const searchData = {
    location: location,
    date: dateString,
    within: within,
  }
  const config = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(searchData)
  }
  return dispatch => {
    dispatch(requestConcerts(credentials))
    return fetch('http://localhost:3000/concerts/upcoming', config)
      .then(res => res.json().then(concerts => ({
        status: res.status,
        concerts
      })
    ))
    .then(({ status, concerts}) => {
      if (status >= 400) {
        dispatch(concertsError(concerts.message))
      } else {
        dispatch(receiveConcerts(concerts))
      }
    }).catch(err => console.log("Errors: ", err))
  }

}