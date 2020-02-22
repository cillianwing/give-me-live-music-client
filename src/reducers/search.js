import { CONCERTS_REQUEST, CONCERTS_SUCCESS, CONCERTS_FAILURE } from '../actions/search';

const initialState = {
  isLoading: false,
  isPulled: false
}

export const search = (state = initialState, action) => {
  switch(action.type) {
    case CONCERTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isPulled: false,
        search: action.credentials
      }
    case CONCERTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPulled: true,
        concerts
      }
    case CONCERTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isPulled: false,
        errorMessage: action.message
      }
  }
}