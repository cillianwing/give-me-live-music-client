import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateProfileForm } from '../actions/authForm'
import { getCurrentUser, updateUser } from '../actions/currentUser'
import ProfileView from '../components/ProfileView'
import ProfileEdit from '../components/ProfileEdit'

const UserProfile = (props) => {
  const [editProfile, setEditProfile] = useState(false)

  useEffect(() => {
    if (!props.currentUser) {
      props.getCurrentUser()
    }
  }, [props.currentUser])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.profileFormData,
      [name]: value
    }
    props.updateProfileForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateUser(props.profileFormData, props.currentUser)
    setEditProfile(false)
  }  

  const handleEditClick = (event) => {
    event.preventDefault()
    setEditProfile(true)
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setEditProfile(false)
  }

  return(
    <>
    { props.currentUser && !editProfile ? <ProfileView handleEditClick={handleEditClick} user={props.currentUser} /> : 
      props.currentUser && editProfile ? <ProfileEdit user={props.currentUser} profileFormData={props.profileFormData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleCancel={handleCancel} /> : '' }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    profileFormData: state.profileForm
  }
}

export default connect(mapStateToProps, { getCurrentUser, updateProfileForm, updateUser })(UserProfile);