import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/authForm'
import { loginUser } from '../actions/auth'

const Login = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.loginFormData,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginUser(props.loginFormData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
		    <input type="text" placeholder="Email" name="email" value={props.loginFormData.email} onChange={handleInputChange} />
        <input type="password" placeholder="Password" name="password" value={props.loginFormData.password} onChange={handleInputChange} />
		    <input type="submit" value="Log In" />
		  </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, loginUser })(Login)