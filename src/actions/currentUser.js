import { resetLoginForm } from './authForm';
import { resetSignupForm } from './authForm';
import { getUserConcerts } from './userConcerts';

export const REQUEST_LOGIN = "REQUEST_LOGIN"
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const REQUEST_SIGNUP = "REQUEST_SIGNUP"
export const SIGNUP_FAIL = 'SIGNUP_FAIL'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE'
export const REQUEST_UPDATE = "REQUEST_UPDATE"
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAIL = 'UPDATE_FAIL'

export const requestLogin = (credentials) => {
  return {
    type: REQUEST_LOGIN,
    credentials
  }
}

export const setCurrentUser = user => {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

export const loginError = (message) => {
  return {
		type: LOGIN_FAIL,
    message
  }
}

export const requestUpdate = (credentials) => {
	return {
		type: REQUEST_UPDATE,
		credentials
	}
}

export const updateSuccess = (user) => {
	return {
		type: UPDATE_SUCCESS,
		user
	}
}

export const updateError = (message) => {
	return {
		type: UPDATE_FAIL,
		message
	}
}

export const requestSignup = (credentials) => {
  return {
    type: REQUEST_SIGNUP,
    credentials
  }
}

export const signupError = (message) => {
  return {
		type: SIGNUP_FAIL,
    message
  }
}

export const requestLogout = () => {
  return {
    type: REQUEST_LOGOUT
  }
}

export const clearCurrentUser = () => {
	return {
		type: CLEAR_CURRENT_USER
	}
}

export const clearErrorMessage = () => {
	return dispatch => {
		return dispatch({type: CLEAR_ERROR_MESSAGE})
	}
}

export const loginUser = (credentials) => {
	return dispatch => {
    dispatch(requestLogin(credentials))
		return fetch(`http://localhost:3000/api/v1/login`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(credentials)
		})
		.then(res => {
      if (!res.ok) {
				throw res
      }
      return res.json()
		})
		.then(data => {
			if (data.success) {
				localStorage.setItem("token", data.jwt)
				dispatch(setCurrentUser(data.user))
				dispatch(getUserConcerts(data.user))
				dispatch(resetLoginForm())
			} else {
				dispatch(resetLoginForm())
				dispatch(loginError(data.failure))
			}
		}).catch(err => console.log("Error: ", err))
	}
}

export const signupUser = (credentials) => {
	return dispatch => {
    dispatch(requestSignup(credentials))
		return fetch(`http://localhost:3000/api/v1/users`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(credentials)
		})
		.then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
		.then(data => {
			if (data.success) {
				localStorage.setItem("token", data.jwt)
				dispatch(setCurrentUser(data.user))
				dispatch(getUserConcerts(data.user))
				dispatch(resetSignupForm())
			} else {
				dispatch(resetSignupForm())
				dispatch(signupError(data.failure))
			}

		}).catch(err => console.log("Error: ", err))
	}
}

export const updateUser = (credentials, user) => {
	const params = {
		id: user.id,
		password: user.password_digest,
		...credentials
	}

	return dispatch => {
    dispatch(requestUpdate(params))
		return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({user: params})
		})
		.then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
		.then(data => {
			if (data.success) {
				console.log(data.success)
				dispatch(updateSuccess(data.user))
			} else {
				console.log(data.failure)
				dispatch(updateError(data.failure))
			}

		}).catch(err => console.log("Error: ", err))
	}
}

export const logoutUser = (event) => {
	return dispatch => {
    dispatch(requestLogout())
		localStorage.setItem("token", "")
		dispatch(clearCurrentUser())
	}
}

export const getCurrentUser = () => {
	const token = localStorage.getItem("token")
	return dispatch => {
		return fetch(`http://localhost:3000/api/v1/auto_login`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
		.then(data => {
			dispatch(setCurrentUser(data))
			dispatch(getUserConcerts(data))
		}).catch(err => console.log("Error: ", err))
	}
}