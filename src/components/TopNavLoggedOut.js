import React from 'react'
import { MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedOut = (props) => {
  return (
    <>
    <MDBNavItem>
      <MDBNavLink className="waves-effect waves-light" to="/login">
        <MDBIcon far icon="envelope" /> Login
      </MDBNavLink>
    </MDBNavItem>   
    <MDBNavItem>
      <MDBNavLink className="waves-effect waves-light" to="/signup">
        <MDBIcon far icon="user-circle" /> Signup
      </MDBNavLink>
    </MDBNavItem>   
    </> 
  )
}

export default TopNavLoggedOut;