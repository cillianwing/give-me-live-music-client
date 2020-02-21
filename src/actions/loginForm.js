export const UPDATE_LOGIN_FORM = 'UPDATE_LOGIN_FORM'
export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM'

export const updateLoginForm = (formData) => {
  return {
    type: UPDATE_LOGIN_FORM,
    formData
  }
}

export const resetLoginForm = () => {
  return {
    type: RESET_LOGIN_FORM
  }
}