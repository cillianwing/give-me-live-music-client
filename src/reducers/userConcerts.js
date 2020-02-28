import { NEW_CONCERT_REQUEST, NEW_CONCERT_SUCCESS, NEW_CONCERT_FAILURE, USER_CONCERTS_REQUEST, USER_CONCERTS_SUCCESS, USER_CONCERTS_FAILURE } from '../actions/userConcerts'

const initialState = {
  isLoading: false,
  isPulled: false,
  userConcerts: []
}

export const userConcerts = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CONCERT_REQUEST:
      return {
        ...state,
        isLoading: true,
        userConcerts: state.userConcerts
      }
    case NEW_CONCERT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userConcerts: [...state.userConcerts, action.concert]
      }
    case NEW_CONCERT_FAILURE:
      return{
        ...state,
        isLoading: false,
        errorMessage: action.message
      }
    case USER_CONCERTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isPulled: false,
        userConcerts: state.userConcerts
      }
    case USER_CONCERTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPulled: true,
        userConcerts: action.concerts
      }
    case USER_CONCERTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isPulled: false,
        errorMessage: action.message
      }
    default: 
      return state
  }
}