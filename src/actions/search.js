import { resetSearchForm } from './searchForm';

export const CONCERTS_REQUEST = 'CONCERTS_REQUEST'
export const CONCERTS_SUCCESS = 'CONCERTS_SUCCESS'
export const CONCERTS_FAILURE = 'CONCERTS_FAILURE'

const requestConcerts = (credentials) => {
  return {
    type: CONCERTS_REQUEST,
    credentials
  }
}

const receiveConcerts = (concerts) => {
  return {
    type: CONCERTS_SUCCESS,
    concerts
  }
}

const concertsError = (message) => {
  return {
    type: CONCERTS_FAILURE,
    message
  }
}

export const getConcerts = (credentials, page) => {
  const city = !!credentials.city ? credentials.city : ''
  const region = !!credentials.region ? credentials.region : ''
  const startDate =  !!credentials.startDate ? credentials.startDate : ''
  const endDate = !!credentials.endDate ? credentials.endDate : ''
  const startMonth = startDate.getMonth() <= 11 ? "0" + (startDate.getMonth() + 1) : 1
  const endMonth = endDate.getMonth() <= 11 ? "0" + (endDate.getMonth() + 1) : 1
  const startDay = "0" + startDate.getDate()
  const endDay = "0" + endDate.getDate()
  const startString = `${startDate.getFullYear()}-${startMonth.slice(-2)}-${startDay.slice(-2)}`
  const endString = `${endDate.getFullYear()}-${endMonth.slice(-2)}-${endDay.slice(-2)}`
  const pageString = `${page}`
  
  const searchData = {
    city: city,
    state: region,
    min_date: startString,
    max_date: endString,
    page: pageString
  }

  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({search: searchData})
  }
  return dispatch => {
    dispatch(requestConcerts(credentials))
    return fetch('http://localhost:3000/api/v1/concerts/upcoming', config)
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