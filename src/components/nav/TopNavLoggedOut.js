import React from 'react'
import { MDBNavbarNav, MDBIcon, MDBNavItem, MDBNavLink } from 'mdbreact'

const TopNavLoggedOut = (props) => {
  return (
    <>
    <MDBNavbarNav right>
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
    </MDBNavbarNav> 
    </> 
  )
}

export default TopNavLoggedOut;