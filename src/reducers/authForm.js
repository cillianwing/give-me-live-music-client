import { UPDATE_LOGIN_FORM, RESET_LOGIN_FORM, UPDATE_SIGNUP_FORM, RESET_SIGNUP_FORM, UPDATE_PROFILE_FORM } from '../actions/authForm';

const initialLoginState = {
  email: '',
  password: ''
}

const initialSignupState = {
  email: '',
  password: '',
  password_confirmation: '',
  first_name: '',
  last_name: '',
  location: '',
  about: ''
}

const initialProfileState = {
  password: '',
  first_name: '',
  last_name: '',
  location: '',
  about: ''
}

export const loginForm = (state = initialLoginState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_FORM:
      return action.formData
    case RESET_LOGIN_FORM:
      return initialLoginState 
    default:
      return state
  }
}

export const signupForm = (state = initialSignupState, action) => {
  switch (action.type) {
    case UPDATE_SIGNUP_FORM:
      return action.formData 
    case RESET_SIGNUP_FORM:
      return initialSignupState
    default:
      return state
  }
}

export const profileForm = (state = initialProfileState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_FORM:
      return action.formData
    default:
      return state
  }
}