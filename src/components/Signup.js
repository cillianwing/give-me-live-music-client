import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/authForm'
import { signupUser } from '../actions/auth'

const Signup = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.signupFormData,
      [name]: value
    }
    props.updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.signupUser({user: props.signupFormData})
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
			  <input type="email" placeholder="Email" name="email" value={props.signupFormData.email} onChange={handleInputChange} />
			  <input type="password" placeholder="Password" name="password" value={props.signupFormData.password} onChange={handleInputChange} />
			  <input type="text" placeholder="First Name" name="first_name" value={props.signupFormData.first_name} onChange={handleInputChange} />
        <input type="text" placeholder="Last Name" name="last_name" value={props.signupFormData.last_name} onChange={handleInputChange} />
        <input type="text" placeholder="Location" name="location" value={props.signupFormData.location} onChange={handleInputChange} />
			  <textarea placeholder="Biography" name="biography" value={props.signupFormData.biography} onChange={handleInputChange} />
			  <input type="submit" value="Sign Up" />
		</form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signupUser })(Signup);