export const UPDATE_LOGIN_FORM = 'UPDATE_LOGIN_FORM'
export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM'
export const UPDATE_SIGNUP_FORM = 'UPDATE_SIGNUP_FORM'
export const RESET_SIGNUP_FORM = 'RESET_SIGNUP_FORM'
export const UPDATE_PROFILE_FORM = 'UPDATE_PROFILE_FORM'

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

export const updateSignupForm = (formData) => {
  return {
    type: UPDATE_SIGNUP_FORM,
    formData
  }
}

export const resetSignupForm = () => {
  return {
    type: RESET_SIGNUP_FORM
  }
}

export const updateProfileForm = (formData) => {
  return {
    type: UPDATE_PROFILE_FORM,
    formData
  }
}