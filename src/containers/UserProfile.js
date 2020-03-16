import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {  resetProfileForm } from '../actions/authForm'
import { getCurrentUser, updateUser } from '../actions/currentUser'
import ProfileView from '../components/ProfileView'
import ProfileEdit from '../components/ProfileEdit'

const UserProfile = (props) => {
  const [editProfile, setEditProfile] = useState(false)
  const [profileInfo, setProfileInfo] = useState('')

  useEffect(() => {
    if (!props.currentUser) {
      props.getCurrentUser()
    }
  }, [props.currentUser])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...profileInfo,
      [name]: value
    }
    setProfileInfo(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateUser(profileInfo, props.currentUser)
    setEditProfile(false)
  }  

  const handleEditClick = (event) => {
    event.preventDefault()
    setProfileInfo({
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      location: props.currentUser.location,
      about: props.currentUser.about})
    setEditProfile(true)
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setProfileInfo({
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      location: props.currentUser.location,
      about: props.currentUser.about})
    setEditProfile(false)
  }

  return(
    <>
    { props.currentUser && !editProfile ? <ProfileView handleEditClick={handleEditClick} user={props.currentUser} /> : 
      props.currentUser && editProfile ? <ProfileEdit user={props.currentUser} profileFormData={profileInfo} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleCancel={handleCancel} /> : '' }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user,
    profileFormData: state.profileForm
  }
}

export default connect(mapStateToProps, { getCurrentUser, updateUser })(UserProfile);