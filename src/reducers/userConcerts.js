import { NEW_CONCERT_REQUEST, NEW_CONCERT_SUCCESS, NEW_CONCERT_FAILURE } from '../actions/userConcerts'

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
        isPulled: false
      }
    case NEW_CONCERT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPulled: true,
        userConcerts: [...state.userConcerts, action.concert]
      }
    case NEW_CONCERT_FAILURE:
      return{
        ...state,
        isLoading: false,
        isPulled: false,
        errorMessage: action.message
      }
    default: 
      return state
  }
}