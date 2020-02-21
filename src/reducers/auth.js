import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/auth';

const initialState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('token') ? true : false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.credentials
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.credentials
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading:false,
        isAuthenticated: false
      }
    default:
      return state
  }
}