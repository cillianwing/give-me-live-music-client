import { NEW_CONCERT_REQUEST, 
  NEW_CONCERT_SUCCESS,
  NEW_CONCERT_FAILURE, 
  USER_CONCERTS_REQUEST, 
  USER_CONCERTS_SUCCESS, 
  USER_CONCERTS_FAILURE, 
  CONCERT_DETAILED_REQUEST,
  CONCERT_DETAILED_SUCCESS,
  CONCERT_DETAILED_FAILURE,
  DETAIL_PULLED } from '../actions/userConcerts'

const initialState = {
  isLoading: false,
  isPulled: false,
  detailPulled: false,
  userConcerts: [],
  concertsDetailed: []
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
    case CONCERT_DETAILED_REQUEST:

      return {
        ...state,
        isLoading: true,
        concertsDetailed: state.concertsDetailed
      }
    case CONCERT_DETAILED_SUCCESS:

      return {
        ...state,
        isLoading: false,
        concertsDetailed: [...state.concertsDetailed, action.concert.results.event]
      }
    case CONCERT_DETAILED_FAILURE:

      return {
        ...state,
        isLoading: false,
        errorMessage: action.message
      }
    case DETAIL_PULLED:
      return {
        ...state,
        detailPulled: true
      }
    default: 
      return state
    }
  }