import { UPDATE_SEARCH_FORM, RESET_SEARCH_FORM } from '../actions/searchForm';

const initialState = {
  city: '',
  region: '',
  startDate: '',
  endDate: ''
}

export const searchForm = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FORM:
      return action.formData
    case RESET_SEARCH_FORM:
      return initialState 
    default:
      return state
  }
}