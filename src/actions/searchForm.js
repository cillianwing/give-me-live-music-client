export const UPDATE_SEARCH_FORM = 'UPDATE_SEARCH_FORM'
export const RESET_SEARCH_FORM = 'RESET_SEARCH_FORM'

export const updateSearchForm = (formData) => {
  return {
    type: UPDATE_SEARCH_FORM,
    formData
  }
}

export const resetSearchForm = () => {
  return {
    type: RESET_SEARCH_FORM
  }
}