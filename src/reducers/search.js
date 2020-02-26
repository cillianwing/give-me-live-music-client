import { CONCERTS_REQUEST, CONCERTS_SUCCESS, CONCERTS_FAILURE, CLEAR_CONCERTS } from '../actions/search';

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
        page: action.page, 
        search: action.credentials
      }
    case CONCERTS_SUCCESS:
      return {
        isLoading: false,
        isPulled: true,
        concerts: action.concerts.event,
        page: action.concerts.page,
        pages: (action.concerts.totalEntries / action.concerts.perPage)
      }
    case CONCERTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isPulled: false,
        errorMessage: action.message
      }
    case CLEAR_CONCERTS:
      return initialState
    default: 
      return state
  }
}