import { CONCERTS_REQUEST, CONCERTS_SUCCESS, CONCERTS_FAILURE } from '../actions/search';

const initialState = {
  isLoading: false,
  isPulled: false,
  page: 1,
  pages: null,
  concerts: []
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
        isLoading: false,
        isPulled: true,
        concerts: action.concerts.event,
        page: parseInt(action.concerts.page_number),
        pages: parseInt(action.concerts.page_count)
      }
    case CONCERTS_FAILURE:
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