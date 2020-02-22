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