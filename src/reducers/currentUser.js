import { REQUEST_LOGIN, LOGIN_FAIL, REQUEST_SIGNUP, SIGNUP_FAIL, REQUEST_LOGOUT, SET_CURRENT_USER, CLEAR_CURRENT_USER } from '../actions/currentUser';

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: localStorage.getItem('token') ? true : false
}

export const currentUser = (state = initialState, action) => {
	switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_FAIL: 
      return {
        ...state,
        isLoading: false,
        errorMessage: action.message
      }
    case REQUEST_SIGNUP:
      return {
        ...state,
        isLoading: true
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.message
      }
    case REQUEST_LOGOUT:
      return {
        ...state,
        isLoading: true
      }
		case SET_CURRENT_USER:
			return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.user
      }
		case CLEAR_CURRENT_USER:
			return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null
      }
		default:
			return state
	}
}