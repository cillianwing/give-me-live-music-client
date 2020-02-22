export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const requestSignup = (credentials) => {
  return {
    type: SIGNUP_REQUEST,
    isLoading: true,
    isAuthenticated: false,
    credentials
  }
}

const receiveSignup = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    isLoading: false,
    isAuthenticated: true,
    token: user.token
  }
}

const signupError = (message) => {
  return {
    type: SIGNUP_FAILURE,
    isLoading: false,
    isAuthenticated: false,
    message
  }
}

const requestLogin = (credentials) => {
  return {
    type: LOGIN_REQUEST,
    isLoading: true,
    isAuthenticated: false,
    credentials
  }
}

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isLoading: false,
    isAuthenticated: true,
    user
  }
}

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isLoading: false,
    isAuthenticated: false,
    message
  }
}

const requestLogout = (credentials) => {
  return {
    type: LOGOUT_REQUEST,
    isLoading: true,
    isAuthenticated: true
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isLoading: false,
    isAuthenticated: false
  }
}

export const signupUser = (credentials) => {
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }

  return dispatch => {
    dispatch(requestSignup(credentials))
    return fetch('http://localhost:3000/signup', config)
      .then(res => res.json().then(user => ({
        headers: res.headers,
        status: res.status,
        user
      })
    ))
    .then(({headers, status, user}) => {
      if (status >= 400) {
        dispatch(signupError(user.message))
      } else {
        localStorage.setItem('token', headers['Authorization'].split(' ')[1])
        dispatch(receiveSignup(user))
      }
    }).catch(err => console.log("Errors: ", err))
  }
}

export const loginUser = (credentials) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(credentials)
  }

  return dispatch => {
    dispatch(requestLogin(credentials))
    debugger
    return fetch('http://localhost:3000/login', config)
      .then(res => res.json().then(user => ({
        headers: res.headers,
        status: res.status,
        user
      })
    ))
    .then(({headers, status, user}) => {
      debugger
      if (status >= 400) {
        dispatch(loginError(user.message))
      } else {
        localStorage.setItem('token', headers['Authorization'].split(' ')[1])
        dispatch(receiveLogin(user))
      }
    }).catch(err => console.log("Error: ", err))
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem("token")
    dispatch(receiveLogout())
  }
}